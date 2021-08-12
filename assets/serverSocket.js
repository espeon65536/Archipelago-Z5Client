// noinspection JSBitwiseOperatorUsage

let itemsReceived = [];
const maxReconnectAttempts = 10;
let reconnectAttempts = 0;

// Control variable for the n64 watcher. Contains an interval (see MDN: setInterval)
let n64Interval = null;
let n64IntervalComplete = true;
let reconnectInterval = null;

// Location Ids provided by the server
let checkedLocations = [];
let missingLocations = [];

const CLIENT_STATUS = {
  CLIENT_UNKNOWN: 0,
  CLIENT_READY: 10,
  CLIENT_PLAYING: 20,
  CLIENT_GOAL: 30,
};

window.addEventListener('load', async () => {
  // Handle server address change
  document.getElementById('server-address').addEventListener('keydown', async (event) => {
    if (event.key !== 'Enter') { return; }

    // If the input value is empty, do not attempt to reconnect
    if (!event.target.value) {
      if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
        serverSocket.close();
        serverSocket = null;
      }
    }

    await connectToServer(event.target.value);
  });
});

const connectToServer = async (address) => {
  if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
    serverSocket.close();
    serverSocket = null;
  }

  // This is a new connection attempt, no auth error has occurred yet
  serverAuthError = false;

  // If there are no n64 devices available, do nothing
  if (!n64Connected) { return; }

  // Determine the server address
  let serverAddress = address;
  if (serverAddress.search(/^\/connect /) > -1) { serverAddress = serverAddress.substring(9); }
  if (serverAddress.search(/:\d+$/) === -1) { serverAddress = `${serverAddress}:${DEFAULT_SERVER_PORT}`;}

  // Attempt to connect to the server
  serverSocket = new WebSocket(`ws://${serverAddress}`);
  serverSocket.onopen = (event) => {};

  // Handle incoming messages
  serverSocket.onmessage = async (event) => {
    const commands = JSON.parse(event.data);
    for (let command of commands) {
      const serverStatus = document.getElementById('server-status');
      switch(command.cmd) {
        case 'RoomInfo':
          // Update sidebar with info from the server
          document.getElementById('server-version').innerText =
            `${command.version.major}.${command.version.minor}.${command.version.build}`;
          document.getElementById('forfeit-mode').innerText =
            command.forfeit_mode[0].toUpperCase() + command.forfeit_mode.substring(1).toLowerCase();
          document.getElementById('remaining-mode').innerText =
            command.remaining_mode[0].toUpperCase() + command.remaining_mode.substring(1).toLowerCase();
          hintCost = Number(command.hint_cost);
          document.getElementById('points-per-check').innerText = command.location_check_points.toString();

          // Update the local cache of location and item maps if necessary
          if (!localStorage.getItem('dataPackageVersion') || !localStorage.getItem('dataPackage') ||
            command.datapackage_version !== localStorage.getItem('dataPackageVersion')) {
            requestDataPackage();
          } else {
            // Load the location and item maps into memory
            buildItemAndLocationData(JSON.parse(localStorage.getItem('dataPackage')));
          }

          const romName = await getRomName();

          // Authenticate with the server
          const connectionData = {
            cmd: 'Connect',
            game: 'Ocarina of Time',
            name: romName[0],
            uuid: getClientId(),
            tags: ['Z5 Client'],
            password: null, // TODO: Handle password protected lobbies
            version: SUPPORTED_ARCHIPELAGO_VERSION,
          };
          serverSocket.send(JSON.stringify([connectionData]));
          break;

        case 'Connected':
          // Reset reconnection info if necessary
          reconnectAttempts = 0;
          if (reconnectInterval) {
            clearInterval(reconnectInterval);
            reconnectInterval = null;
          }

          // Store the reported location check data from the server. They are arrays of locationIds
          checkedLocations = command.checked_locations;
          missingLocations = command.missing_locations;

          // Set the hint cost text
          document.getElementById('hint-cost').innerText =
            (Math.round((hintCost / 100) * (checkedLocations.length + missingLocations.length))).toString();

          // Update header text
          serverStatus.classList.remove('disconnected');
          serverStatus.innerText = 'Connected';
          serverStatus.classList.add('connected');

          // Save the list of players provided by the server
          players = command.players;

          // Save information about the current player
          playerTeam = command.team;
          playerSlot = command.slot;

          // Write player names to ROM
          const romPlayerNames = {};
          players.forEach((player) => {
            romPlayerNames[player.slot] = player.alias;
          });
          await setNames(romPlayerNames);

          n64Interval = setInterval(async () => {
            // Do not run multiple intervals simultaneously
            if (!n64IntervalComplete) { return; }

            // Interval has started
            n64IntervalComplete = false;

            // Send items to OoT if there are unsent items waiting
            const receivedItemCount = (await getReceivedItemCount());
            if (receivedItemCount < itemsReceived.length) {
              // If link is currently able to receive an item, send it to him
              const itemReceivable = (await isItemReceivable())[0];
              if (parseInt(itemReceivable, 10)) {
                await receiveItem(itemsReceived[receivedItemCount].item);
              }
            }

            // Get location checks from OoT
            const romLocationsChecked = await getLocationChecks();

            // Look for new location checks
            let romLocationIndex = 0;
            let newLocationChecks = [];
            while (romLocationIndex < romLocationsChecked.length) {
              // If the location has been checked
              if (parseInt(romLocationsChecked[romLocationIndex+1], 10) === 1) {
                // If this check is present in missing locations, remove it
                if (missingLocations.indexOf(ootLocationsByName[romLocationsChecked[romLocationIndex]]) > -1) {
                  missingLocations.splice(missingLocations.indexOf(ootLocationsByName[romLocationsChecked[romLocationIndex]]),1);
                }

                // If this check is not present in checked locations, note it as a new check
                if (!checkedLocations.includes(ootLocationsByName[romLocationsChecked[romLocationIndex]])) {
                  newLocationChecks.push(ootLocationsByName[romLocationsChecked[romLocationIndex]]);
                }
              }
              romLocationIndex += 2;
            }

            // If there are new location checks, send them to the AP server
            if (newLocationChecks.length > 0) {
              sendLocationChecks(newLocationChecks);
            }

            // Interval complete, allow a new run
            n64IntervalComplete = true;
          });
          break;

        case 'ConnectionRefused':
          serverStatus.classList.remove('connected');
          serverStatus.innerText = 'Not Connected';
          serverStatus.classList.add('disconnected');
          if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
            appendConsoleMessage(`Error while connecting to AP server: ${command.errors.join(', ')}.`);
            serverAuthError = true;
            serverSocket.close();
          }
          break;

        case 'ReceivedItems':
          // Save received items in the array of items to be sent to the n64, if they have not been sent already
          command.items.forEach((item) => {
            // Items from locations with id 0 or lower are special cases, and should always be allowed
            if (item.location <= 0) { return itemsReceived.push(item); }

            if (itemsReceived.find((ir) =>
              ir.item === item.item && ir.location === item.location && ir.player === item.player
            )) { return; }
            itemsReceived.push(item);
          });
          break;

        case 'RoomUpdate':
          // Update sidebar with info from the server
          if (command.hasOwnProperty('version')) {
            document.getElementById('server-version').innerText =
              `${command.version.major}.${command.version.minor}.${command.version.build}`;
          }

          if (command.hasOwnProperty('forfeit_mode')) {
            document.getElementById('forfeit-mode').innerText =
              command.forfeit_mode[0].toUpperCase() + command.forfeit_mode.substring(1).toLowerCase();
          }

          if (command.hasOwnProperty('remaining_mode')) {
            document.getElementById('remaining-mode').innerText =
              command.remaining_mode[0].toUpperCase() + command.remaining_mode.substring(1).toLowerCase();
          }

          if (command.hasOwnProperty('hint_cost')) {
            hintCost = Number(command.hint_cost);
            document.getElementById('hint-cost').innerText =
              (Math.floor((hintCost / 100) * (checkedLocations.length + missingLocations.length))).toString();
          }

          if (command.hasOwnProperty('location_check_points')) {
            document.getElementById('points-per-check').innerText = command.location_check_points.toString();
          }

          if (command.hasOwnProperty('hint_points')) {
            document.getElementById('hint-points').innerText = command.hint_points.toString();
          }
          break;

        case 'Print':
          appendConsoleMessage(command.text);
          break;

        case 'PrintJSON':
          appendFormattedConsoleMessage(command.data);
          break;

        case 'DataPackage':
          // Save updated location and item maps into localStorage
          if (command.data.version !== 0) { // Unless this is a custom package, denoted by version zero
            localStorage.setItem('dataPackageVersion', command.data.version);
            localStorage.setItem('dataPackage', JSON.stringify(command.data));
          }
          buildItemAndLocationData(command.data);
          break;

        default:
          // Unhandled events are ignored
          break;
      }
    }
  };

  serverSocket.onclose = (event) => {
    const serverStatus = document.getElementById('server-status');
    serverStatus.classList.remove('connected');
    serverStatus.innerText = 'Not Connected';
    serverStatus.classList.add('disconnected');
    if (n64Interval) { clearInterval(n64Interval); }

    // If the user cleared the server address, do nothing
    const serverAddress = document.getElementById('server-address').value;
    if (!serverAddress) { return; }

    // Attempt to reconnect to the AP server
    if (!n64Connected) { return; }

    setTimeout(() => {
      // Do not attempt to reconnect if a server connection exists already. This can happen if a user attempts
      // to connect to a new server after connecting to a previous one
      if (serverSocket && serverSocket.readyState === WebSocket.OPEN) { return; }

      // If the socket was closed in response to an auth error, do not reconnect
      if (serverAuthError) { return }

      // Do not exceed the limit of reconnection attempts
      if (++reconnectAttempts > maxReconnectAttempts) {
        appendConsoleMessage('Archipelago server connection lost. The connection closed unexpectedly. ' +
          'Please try to reconnect, or restart the client.');
        return;
      }

      appendConsoleMessage(`Connection to AP server lost. Attempting to reconnect ` +
        `(${reconnectAttempts} of ${maxReconnectAttempts})`);
      connectToServer(address);
    }, 5000);
  };

  serverSocket.onerror = (event) => {
    if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
      appendConsoleMessage('Archipelago server connection lost. The connection closed unexpectedly. ' +
        'Please try to reconnect, or restart the client.');
      serverSocket.close();
      if (n64Interval) { clearInterval(n64Interval); }
    }
  };
};

const getClientId = () => {
  let clientId = localStorage.getItem('clientId');
  if (!clientId) {
    clientId = (Math.random() * 10000000000000000).toString();
    localStorage.setItem('clientId', clientId);
  }
  return clientId;
};

const sendMessageToServer = (message) => {
  if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
    serverSocket.send(JSON.stringify([{
      cmd: 'Say',
      text: message,
    }]));
  }
};

const serverSync = () => {
  if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
    serverSocket.send(JSON.stringify([{ cmd: 'Sync' }]));
  }
};

const requestDataPackage = () => {
  if (!serverSocket || serverSocket.readyState !== WebSocket.OPEN) { return; }
  serverSocket.send(JSON.stringify([{
    cmd: 'GetDataPackage',
  }]));
};

const sendLocationChecks = (locationIds) => {
  locationIds.forEach((id) => checkedLocations.push(id));
  serverSocket.send(JSON.stringify([{
    cmd: 'LocationChecks',
    locations: locationIds,
  }]));
};

const buildItemAndLocationData = (dataPackage) => {
  Object.values(dataPackage.games).forEach((game) => {
    Object.keys(game.item_name_to_id).forEach((item) => {
      apItemsById[game.item_name_to_id[item]] = item;
    });

    Object.keys(game.location_name_to_id).forEach((location) => {
      apLocationsById[game.location_name_to_id[location]] = location;
    });
  });

  ootLocationsByName = dataPackage.games['Ocarina of Time'].location_name_to_id;
};

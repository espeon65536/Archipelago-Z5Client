let cachedCommands = [];
const maxCachedCommands = 10;
let commandCursor = 0;

window.addEventListener('load', () => {
  const commandInput = document.getElementById('console-input');
  commandInput.addEventListener('keydown', (event) => {
    // Only perform events on desired keys
    const allowedKeys = ['ArrowUp', 'ArrowDown'];
    if (allowedKeys.indexOf(event.key) === -1) { return; }

    switch (event.key) {
      case 'ArrowUp':
        if (cachedCommands.length === 0 || commandCursor === maxCachedCommands) { return; }
        if (commandCursor < maxCachedCommands && commandCursor < cachedCommands.length) { commandCursor++; }
        commandInput.value = commandCursor ? cachedCommands[cachedCommands.length - commandCursor] : '';
        return;

      case 'ArrowDown':
        if (cachedCommands.length === 0 || commandCursor === 0) { return; }
        if (commandCursor > 0) { commandCursor--; }
        commandInput.value = commandCursor ? cachedCommands[cachedCommands.length - commandCursor] : '';
        return;

      default:
        return;
    }
  });

  commandInput.addEventListener('keyup', async (event) => {
    // Ignore non-enter keyup events and empty commands
    if (event.key !== 'Enter' || !event.target.value) { return; }

    // Ignore events related to the keydown listener
    if (event.key === 'Up' || event.key === 'Down') { return; }

    // Detect slash commands and perform their actions
    if (event.target.value[0] === '/') {
      const commandParts = event.target.value.split(' ');
      switch (commandParts[0]) {
        case '/connect':
          if (!n64Connected) {
            appendConsoleMessage('An N64 device must be connected before the client can connect to the AP server.');
            return;
          }

          commandParts.shift();
          document.getElementById('server-address').value = commandParts[0];
          await connectToServer(commandParts[0], commandParts[1]);
          break;

        case '/fontsize':
          if (commandParts.length < 2) {
            appendConsoleMessage('You must specify a font size like: /fontsize 16');
          }
          setFontSize(parseInt(commandParts[1]));
          break;

        case '/launcher':
          appendConsoleMessage('Opening dialog for launcher choice...');
          window.ipc.send('setLauncher');
          break;

        case '/pause':
        case '/malmo': // For the memes
          receiveItems ? disableReceivingItems() : enableReceivingItems();
          break;

        case '/sync':
          serverSync();
          break;

        case '/help':
          appendConsoleMessage('Available commands:');
          appendConsoleMessage('/connect [server] [password] - Connect to an AP server with an optional password');
          appendConsoleMessage('/fontsize [size] - Change the size of the font. 16 is default');
          appendConsoleMessage('/launcher - Choose an emulator to launch ROMs with instead of the system default');
          appendConsoleMessage('/pause - Pause or resume receiving items from other players');
          appendConsoleMessage('/sync - Force the client to synchronize with the AP server');
          appendConsoleMessage('/help - Print this message');
          break;

        default:
          appendConsoleMessage('Unknown command.');
          break;
      }

      // Cache the command, empty the command input, reset the command cursor
      cacheCommand(event.target.value);
      commandInput.value = '';
      commandCursor = 0;
      return;
    }

    // Send command to server
    sendMessageToServer(event.target.value);
    cacheCommand(event.target.value);

    // Clear the input box
    commandInput.value = '';
  });
});

const appendConsoleMessage = (message) => {
  const monitor = document.getElementById('console-output-wrapper');
  // Remember only the last 250 messages
  while (monitor.children.length >= 250) {
    monitor.removeChild(monitor.firstChild);
  }

  // Append message div to monitor
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('console-output');
  messageDiv.innerText = message;
  monitor.appendChild(messageDiv);
  messageDiv.scrollIntoView(false);
};

const appendFormattedConsoleMessage = (messageParts) => {
  const monitor = document.getElementById('console-output-wrapper');
  // Remember only the last 250 messages
  while (monitor.children.length >= 250) {
    monitor.removeChild(monitor.firstChild);
  }

  // Create the message div
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('console-output');

  // Create the spans to populate the message div
  for (const part of messageParts) {
    const span = document.createElement('span');
    if (part.hasOwnProperty('type')) {
      switch(part.type){
        case 'player_id':
          const playerIsClient = parseInt(part.text, 10) === playerSlot;
          if (playerIsClient) { span.style.fontWeight = 'bold'; }
          span.style.color = playerIsClient ? '#ffa565' : '#52b44c';
          span.innerText = players[parseInt(part.text, 10) - 1].alias;
          break;
        case 'item_id':
          span.style.color = '#fc5252';
          span.innerText = apItemsById[part.text];
          break;
        case 'location_id':
          span.style.color = '#5ea2c1';
          span.innerText = apLocationsById[Number(part.text)];
          break;
        default:
          span.innerText = part.text;
      }
    } else {
      span.innerText = part.text;
    }
    messageDiv.appendChild(span);
  }

  // Append the message div to the monitor
  monitor.appendChild(messageDiv);
  messageDiv.scrollIntoView(false);
};

const cacheCommand = (command) => {
  appendConsoleMessage(`Command: ${command}`)
  // Limit stored command count to five
  while (cachedCommands.length > maxCachedCommands) { cachedCommands.shift(); }

  // Store the command
  cachedCommands.push(command);
};

let currentResolve = null;
let currentTimeout = null;

window.addEventListener('load', () => {
  window.oot.requestComplete((...args) => {
    if (currentResolve) { currentResolve(...args); }
  });
});

const setResolve = (resolve) => {
  currentResolve = resolve;
  if(currentTimeout) { clearTimeout(currentTimeout); }
  currentTimeout = setTimeout(() => {
    window.oot.disconnectAllClients();
    appendConsoleMessage('A timeout has occurred and the connection to BizHawk and the AP server ' +
      'have been terminated.');
    appendConsoleMessage('The client will auto-reconnect once BizHawk resumes communication.');

    // Client timeouts occur if the user manually disconnects from the AP server. If that was not the case,
    // suggest another possible reason this may have occurred
    if (!preventReconnect) {
      appendConsoleMessage('This probably happened because you opened a menu in BizHawk.');
    }

    // Stop querying the n64
    if (n64Interval) {
      clearInterval(n64Interval);
      n64Interval = null;
      n64Connected = false;
    }

    // Close the connection to the AP server
    if (serverSocket && serverSocket.readyState === WebSocket.OPEN) {
      serverSocket.close();
    }

    // Report timeout on most recent request and reset tracking data
    if (currentResolve) { currentResolve(null); }
    currentResolve = null;
    currentTimeout = null;
  }, 3000);
};

const getLocationChecks = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.getLocationChecks();
});

const setNames = (namesObj) => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.setNames(namesObj);
});

const getRomName = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.getRomName();
});

const getReceivedItemCount = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.getReceivedItemCount();
});

const isItemReceivable = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.isItemReceivable();
});

const receiveItem = (itemId) => new Promise((resolve) => {
  // AP must know of the requested item
  if (!apItemsById.hasOwnProperty(itemId)) {
    return window.logging.writeToLog(`AP has no such item (${itemId}).`);
  }

  // OoT must have the requested item
  if (!romItemsByName.hasOwnProperty(apItemsById[itemId])) {
    return window.logging.writeToLog(`OoT has no such item. (itemId: ${apItemsById[itemId]})`);
  }

  setResolve(resolve);
  window.oot.receiveItem(romItemsByName[apItemsById[itemId]]);
});

const getCurrentGameMode = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.getCurrentGameMode();
});

const isGameComplete = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.isGameComplete();
});

const isDeathLinkEnabled = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.isDeathLinkEnabled();
});

const isLinkAlive = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.isLinkAlive();
});

const killLink = () => new Promise((resolve) => {
  setResolve(resolve);
  window.oot.killLink();
});

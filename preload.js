const { contextBridge, ipcRenderer } = require('electron');

// Client config
contextBridge.exposeInMainWorld('clientConfig', {
  setLauncher: (launcher) => ipcRenderer.send('setLauncher', launcher),
});

// Used for logging
contextBridge.exposeInMainWorld('logging', {
  writeToLog: (data) => ipcRenderer.invoke('writeToLog', data),
});

// OoT Interaction
contextBridge.exposeInMainWorld('oot', {
  // Functions callable by renderer to cause IPCMain to perform an action
  receiveItem: (itemOffset) => ipcRenderer.send('receiveItem', itemOffset),
  isItemReceivable: () => ipcRenderer.send('isItemReceivable'),
  getReceivedItemCount: () => ipcRenderer.send('getReceivedItemCount'),
  getRomName: () => ipcRenderer.send('getRomName'),
  setNames: (namesObj) => ipcRenderer.send('setNames', namesObj),
  getLocationChecks: () => ipcRenderer.send('getLocationChecks'),
  getCurrentGameMode: () => ipcRenderer.send('getCurrentGameMode'),
  isGameComplete: () => ipcRenderer.send('isGameComplete'),
  isDeathLinkEnabled: () => ipcRenderer.send('isDeathLinkEnabled'),
  isLinkAlive: () => ipcRenderer.send('isLinkAlive'),
  killLink: () => ipcRenderer.send('killLink'),
  disconnectAllClients: () => ipcRenderer.send('disconnectAllClients'),

  // Function listenable by renderer to allow IPCMain to report a completed request
  requestComplete: (callback) => ipcRenderer.on('requestComplete', (event, ...args) => callback(...args)),

  // Function listenable by renderer to allow IPCMain to report a connected or disconnected client
  deviceConnected: (callback) => ipcRenderer.on('deviceConnected', (event, connected) => callback(connected)),
});

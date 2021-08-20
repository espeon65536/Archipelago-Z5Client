let currentResolve = null;
let currentTimeout = null;

window.addEventListener('load', () => {
  window.oot.requestComplete((...args) => currentResolve(...args));
});

const setResolve = (resolve) => {
  currentResolve = resolve;
  if(currentTimeout) { clearTimeout(currentTimeout); }
  currentTimeout = setTimeout(() => {
    if (currentResolve) { currentResolve(null); }
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
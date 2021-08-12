let currentResolve = null;

window.addEventListener('load', () => {
  window.oot.requestComplete((...args) => currentResolve(...args));
});

const getLocationChecks = () => new Promise((resolve) => {
  currentResolve = resolve;
  window.oot.getLocationChecks();
});

const setNames = (namesObj) => new Promise((resolve) => {
  currentResolve = resolve;
  window.oot.setNames(namesObj);
});

const getRomName = () => new Promise((resolve) => {
  currentResolve = resolve;
  window.oot.getRomName();
});

const getReceivedItemCount = () => new Promise((resolve) => {
  currentResolve = resolve;
  window.oot.getReceivedItemCount();
});

const isItemReceivable = () => new Promise((resolve) => {
  currentResolve = resolve;
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

  currentResolve = resolve;
  window.oot.receiveItem(romItemsByName[apItemsById[itemId]]);
});


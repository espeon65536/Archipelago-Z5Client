let currentResolve = null;

window.addEventListener('load', () => {
  window.oot.requestComplete((...args) => {
    console.info(...args);
    currentResolve(...args);
  });
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
  currentResolve = resolve;
  window.oot.receiveItem(parseInt(itemId, 10));
});


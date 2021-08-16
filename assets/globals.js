// Client version data
const CLIENT_VERSION = {
  state: 'Beta',
  major: 0,
  minor: 9,
  patch: 1,
};

const SUPPORTED_ARCHIPELAGO_VERSION = {
  major: 0,
  minor: 1,
  build: 6,
  class: 'Version',
};

// Archipelago server
const DEFAULT_SERVER_PORT = 38281;
let serverSocket = null;
let serverAuthError = false;

// Local client connection state
let n64Connected = false;

// Players in the current game, received from Connected server packet
let playerSlot = null;
let playerTeam = null;
let players = [];
let hintCost = null;

// Location and item maps, populated from localStorage
let apItemsById = {};
let apLocationsById = {};
let ootLocationsByName = {};

// Data shared between main and renderer processes
let sharedData = {};

// The user has the option to pause receiving items
let receiveItems = true;

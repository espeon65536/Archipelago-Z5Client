// FIFO queue of network commands
const requestQueue = [];

// Function to generate a random 32 character string
const idChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const generateRequestId = () => {
  let requestId = '';
  for (let i=0; i<32; ++i){
    requestId += idChars.charAt(Math.floor(Math.random()*idChars.length));
  }
  return requestId;
};


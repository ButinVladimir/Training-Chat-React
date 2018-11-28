const Socket = jest.genMockFromModule('socket.io-client');

Socket.prototype.on = function(event, handler) {
  this.__mockHandlers = this.__mockHandlers || new Map();
  this.__mockHandlers.set(event, handler);
};

Socket.prototype.off = function(event, handler) {
  this.__mockHandlers = this.__mockHandlers || new Map();
  this.__mockHandlers.delete(event);
};

const factoryFn = (url) => {
  return new Socket();
};

export { Socket };
export default factoryFn;

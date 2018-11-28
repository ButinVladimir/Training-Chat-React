import {
  GET_MESSAGE,
} from '../events';

export default (users, socket, user) => (message, to) => {
  if (user.login && message) {
    if (to && to.length > 0) {
      console.log(`${user.login} is sending message ${message} to ${to.join(', ')}`);

      const visited = new Set();
      to
        .forEach((t) => {
          if (visited.has(t) || t === user.login) {
            return;
          }
          visited.add(t);

          const recipient = users.get(t);
          if (recipient) {
            recipient.socket.emit(GET_MESSAGE, message, user.login, to);
          }
        });
    } else {
      console.log(`${user.login} is broadcasting message ${message}`);

      socket.broadcast.emit(GET_MESSAGE, message, user.login, []);
    }
  }
};

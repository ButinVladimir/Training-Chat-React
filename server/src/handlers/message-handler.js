import {
  GET_MESSAGE,
} from '../events';

export default (users, socket, user) => (message, to) => {
  if (user.login) {
    if (to && to.length > 0) {
      console.log(`${user.login} is sending message ${message} to ${to.join(', ')}`);

      to
        .filter(t => t !== user.login)
        .forEach((t) => {
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

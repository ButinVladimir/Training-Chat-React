import {
  LOGIN,
  LOGOUT,
  SEND_MESSAGE,
  USER_DISAPPEARS,
  UPDATE_USER_LIST,
} from './events';
import User from './user';
import loginHandler from './handlers/login-handler';
import logoutHandler from './handlers/logout-handler';
import messageHandler from './handlers/message-handler';

const socketHandler = users => (socket) => {
  console.log('User connected');
  const user = new User(socket, null);

  socket.on('disconnect', () => {
    if (user.login !== null) {
      users.remove(user.login);
      socket.broadcast.emit(USER_DISAPPEARS, user.login);
    }

    console.log('User disconnected');
  });

  console.log(`Sending list of all users to ${user.login}`);
  socket.emit(UPDATE_USER_LIST, users.getAllUserNames());

  socket.on(LOGIN, loginHandler(users, socket, user));
  socket.on(LOGOUT, logoutHandler(users, socket, user));
  socket.on(SEND_MESSAGE, messageHandler(users, socket, user));
};

export default socketHandler;

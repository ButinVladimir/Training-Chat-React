import {
  LOGOUT_SUCCESSFUL,
  USER_ERROR,
  USER_DISAPPEARS,
} from '../events';

export default (users, socket, user) => (userLogin) => {
  console.log(`${userLogin} is trying to log out...`);

  if (!userLogin) {
    socket.emit(USER_ERROR, 'Invalid login');
  } else if (user.login !== userLogin) {
    socket.emit(USER_ERROR, 'Login mismatch');
  } else if (!users.exists(userLogin)) {
    socket.emit(USER_ERROR, `User ${userLogin} has already logged out`);
  } else {
    user.setLogin(null);
    users.remove(userLogin);

    console.log(`${userLogin} successfully logged out`);
    socket.emit(LOGOUT_SUCCESSFUL);
    socket.broadcast.emit(USER_DISAPPEARS, userLogin);
  }
};

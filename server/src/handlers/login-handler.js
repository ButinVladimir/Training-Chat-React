import {
  LOGIN_SUCCESSFUL,
  USER_ERROR,
  USER_APPEARS,
} from '../events';

export default (users, socket, user) => (userLogin) => {
  console.log(`${userLogin} is trying to log in...`);

  if (!userLogin) {
    socket.emit(USER_ERROR, 'Login cannot be empty');
  } else if (users.exists(userLogin)) {
    socket.emit(USER_ERROR, `User ${userLogin} is already logged in`);
  } else {
    user.setLogin(userLogin);
    users.add(user);

    console.log(`${userLogin} successfully loginned`);
    socket.emit(LOGIN_SUCCESSFUL);
    socket.broadcast.emit(USER_APPEARS, userLogin);
  }
};

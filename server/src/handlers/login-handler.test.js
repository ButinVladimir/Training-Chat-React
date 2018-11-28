import loginHandler from './login-handler';
import Users from '../users';
import User from '../user';
import { USER_ERROR, LOGIN_SUCCESSFUL, USER_APPEARS } from '../events';

describe('loginHandler', () => {
  it('returns a handler', () => {
    expect(loginHandler(null, null, null)).toBeInstanceOf(Function);
  });

  it('handles successful login', () => {
    const users = new Users();
    const user = new User({}, null);
    const userLogin = 'userLogin';

    expect(users.userList.size).toEqual(0);
    const socket = {
      broadcast: {
        emit: jest.fn(),
      },
      emit: jest.fn(),
    };
    loginHandler(users, socket, user)(userLogin);

    expect(user.login).toEqual(userLogin);
    expect(users.exists(userLogin)).toEqual(true);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(LOGIN_SUCCESSFUL);
    expect(socket.broadcast.emit).toHaveBeenCalledTimes(1);
    expect(socket.broadcast.emit).toHaveBeenCalledWith(USER_APPEARS, userLogin);
  });

  it('handles empty login', () => {
    const users = new Users();
    const user = new User({}, null);

    expect(users.userList.size).toEqual(0);
    const socket = {
      emit: jest.fn(),
    };
    loginHandler(users, socket, user)('');

    expect(user.login).toEqual(null);
    expect(users.userList.size).toEqual(0);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, 'Login cannot be empty');
  });

  it('handles already loginned user', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, userLogin);

    users.add(user);
    expect(users.userList.size).toEqual(1);
    const socket = {
      emit: jest.fn(),
    };
    loginHandler(users, socket, user)(userLogin);

    expect(user.login).toEqual(userLogin);
    expect(users.userList.size).toEqual(1);
    expect(users.exists(userLogin)).toEqual(true);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, 'User has already logged in');
  });

  it('handles login of different user', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, null);
    const otherUser = new User({}, userLogin);

    users.add(otherUser);
    expect(users.userList.size).toEqual(1);
    const socket = {
      emit: jest.fn(),
    };
    loginHandler(users, socket, user)(userLogin);

    expect(user.login).toEqual(null);
    expect(users.userList.size).toEqual(1);
    expect(users.exists(userLogin)).toEqual(true);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, `User ${userLogin} has already logged in`);
  });
});

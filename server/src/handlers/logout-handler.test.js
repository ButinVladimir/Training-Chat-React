import logoutHandler from './logout-handler';
import Users from '../users';
import User from '../user';
import { USER_ERROR, LOGOUT_SUCCESSFUL, USER_DISAPPEARS } from '../events';

describe('logoutHandler', () => {
  it('returns a handler', () => {
    expect(logoutHandler(null, null, null)).toBeInstanceOf(Function);
  });

  it('handles successful logout', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, userLogin);

    users.add(user);
    expect(users.userList.size).toEqual(1);
    const socket = {
      broadcast: {
        emit: jest.fn(),
      },
      emit: jest.fn(),
    };
    logoutHandler(users, socket, user)(userLogin);

    expect(user.login).toEqual(null);
    expect(users.exists(userLogin)).toEqual(false);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(LOGOUT_SUCCESSFUL);
    expect(socket.broadcast.emit).toHaveBeenCalledTimes(1);
    expect(socket.broadcast.emit).toHaveBeenCalledWith(USER_DISAPPEARS, userLogin);
  });

  it('handles empty login', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, userLogin);

    users.add(user);
    expect(users.userList.size).toEqual(1);
    const socket = {
      emit: jest.fn(),
    };
    logoutHandler(users, socket, user)(null);

    expect(user.login).toEqual(userLogin);
    expect(users.userList.size).toEqual(1);
    expect(users.exists(userLogin)).toEqual(true);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, 'Invalid login');
  });

  it('handles mismatched login', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, userLogin);

    users.add(user);
    expect(users.userList.size).toEqual(1);
    const socket = {
      emit: jest.fn(),
    };
    logoutHandler(users, socket, user)('AnotherLogin');

    expect(user.login).toEqual(userLogin);
    expect(users.userList.size).toEqual(1);
    expect(users.exists(userLogin)).toEqual(true);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, 'Login mismatch');
  });

  it('handles already logged out user', () => {
    const userLogin = 'userLogin';
    const users = new Users();
    const user = new User({}, userLogin);

    expect(users.userList.size).toEqual(0);
    const socket = {
      emit: jest.fn(),
    };
    logoutHandler(users, socket, user)(userLogin);

    expect(user.login).toEqual(userLogin);
    expect(users.exists(userLogin)).toEqual(false);
    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(USER_ERROR, `User ${userLogin} has already logged out`);
  });
});

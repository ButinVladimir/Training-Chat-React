import { EventEmitter } from 'events';
import {
  LOGIN,
  LOGOUT,
  SEND_MESSAGE,
  USER_DISAPPEARS,
  UPDATE_USER_LIST,
} from './events';
import User from './user';
import Users from './users';
import socketHandler from './socket-handler';

describe('socketHandler', () => {
  it('is created without error', () => {
    expect(socketHandler(new Users())).toBeInstanceOf(Function);
  });

  it('handles new user', () => {
    const emitter = new EventEmitter();
    const socket = {
      emit: jest.fn(),
      on: jest.fn((...args) => emitter.on(...args)),
    };

    const users = new Users();
    users.add(new User({}, 'Login1'));
    users.add(new User({}, 'Login2'));
    socketHandler(users)(socket);

    expect(socket.emit).toHaveBeenCalledTimes(1);
    expect(socket.emit).toHaveBeenCalledWith(UPDATE_USER_LIST, ['Login1', 'Login2']);

    expect(emitter.listenerCount(LOGIN)).toEqual(1);
    expect(emitter.listenerCount(LOGOUT)).toEqual(1);
    expect(emitter.listenerCount(SEND_MESSAGE)).toEqual(1);
    expect(emitter.listenerCount('disconnect')).toEqual(1);
  });

  it('handles disconnect when user doesn\'t have login', () => {
    const emitter = new EventEmitter();
    const socket = {
      emit: jest.fn(),
      on: jest.fn((...args) => emitter.on(...args)),
      broadcast: {
        emit: jest.fn(),
      },
    };

    const users = new Users();
    socketHandler(users)(socket);
    emitter.emit('disconnect');

    expect(socket.broadcast.emit).not.toHaveBeenCalled();
  });

  it('handles disconnect when user have login', () => {
    const emitter = new EventEmitter();
    const socket = {
      emit: jest.fn(),
      on: jest.fn((...args) => emitter.on(...args)),
      broadcast: {
        emit: jest.fn(),
      },
    };

    const userLogin = 'userLogin';
    const users = new Users();
    socketHandler(users)(socket);
    emitter.emit(LOGIN, userLogin);

    expect(users.exists(userLogin)).toBe(true);
    emitter.emit('disconnect');

    expect(socket.broadcast.emit).toHaveBeenCalledTimes(2);
    expect(socket.broadcast.emit).toHaveBeenNthCalledWith(2, USER_DISAPPEARS, userLogin);
    expect(users.exists(userLogin)).toBe(false);
  });
});

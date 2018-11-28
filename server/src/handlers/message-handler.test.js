import messageHandler from './message-handler';
import Users from '../users';
import User from '../user';
import { GET_MESSAGE } from '../events';

describe('messageHandler', () => {
  it('returns a handler', () => {
    expect(messageHandler(null, null, null)).toBeInstanceOf(Function);
  });

  it('handles empty user login', () => {
    const socket = {
      broadcast: {
        emit: jest.fn(),
      },
      emit: jest.fn(),
    };

    const user = new User(socket, null);
    const users = new Users();

    messageHandler(users, socket, user)('message', []);
    expect(socket.emit).not.toBeCalled();
    expect(socket.broadcast.emit).not.toBeCalled();
  });

  it('handles empty message', () => {
    const socket = {
      broadcast: {
        emit: jest.fn(),
      },
      emit: jest.fn(),
    };

    const userLogin = 'UserLogin';
    const user = new User(socket, userLogin);
    const users = new Users();
    users.add(user);

    messageHandler(users, socket, user)('', []);
    expect(socket.emit).not.toBeCalled();
    expect(socket.broadcast.emit).not.toBeCalled();
  });

  it('handles broadcasting', () => {
    const socket = {
      broadcast: {
        emit: jest.fn(),
      },
    };

    const userLogin = 'UserLogin';
    const user = new User(socket, userLogin);
    const users = new Users();
    users.add(user);

    const message = 'message text';
    messageHandler(users, socket, user)(message, []);

    expect(socket.broadcast.emit).toHaveBeenCalledTimes(1);
    expect(socket.broadcast.emit).toHaveBeenCalledWith(GET_MESSAGE, message, userLogin, []);
  });

  it('handles sending message to users', () => {
    const users = new Users();
    for (let i = 0; i < 3; i += 1) {
      const socket = {
        emit: jest.fn(),
      };
      users.add(new User(socket, `User${i}`));
    }

    const fromUser = users.get('User0');
    expect(fromUser).not.toBe(null);

    const message = 'message text';
    const to = ['User0', 'User1', 'User2', 'User1', 'User2', 'User3'];
    messageHandler(users, fromUser.socket, fromUser)(message, to);

    let user;
    for (let i = 1; i < 3; i += 1) {
      user = users.get(`User${i}`);
      expect(user).not.toBe(null);
      expect(user.socket.emit).toHaveBeenCalledTimes(1);
      expect(user.socket.emit).toHaveBeenCalledWith(GET_MESSAGE, message, 'User0', to);
    }

    user = users.get('User0');
    expect(user).not.toBe(null);
    expect(user.socket.emit).not.toHaveBeenCalled();
  });
});

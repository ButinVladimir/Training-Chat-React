import User from './user';

describe('User', () => {
  it('creates without error', () => {
    const socket = {};
    const login = 'Login';
    const user = new User(socket, login);

    expect(user.socket).toBe(socket);
    expect(user.login).toEqual(login);
  });

  it('handles setLogin call', () => {
    const oldLogin = 'Login';
    const newLogin = 'newLogin';
    const user = new User({}, oldLogin);

    expect(user.login).toEqual(oldLogin);
    user.setLogin(newLogin);
    expect(user.login).toEqual(newLogin);
  });
});

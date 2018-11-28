import Users from './users';
import User from './user';

describe('Users', () => {
  it('creates instance without error', () => {
    expect(() => new Users()).not.toThrow();
  });

  it('handles check if user is in list', () => {
    const userLogin = 'user';
    const otherLogin = 'otherLogin';

    const users = new Users();
    const user = new User({}, userLogin);
    users.add(new User({}, otherLogin));

    expect(users.exists(userLogin)).toEqual(false);
    users.add(user);
    expect(users.exists(userLogin)).toEqual(true);
  });

  it('handles adding user to the list', () => {
    const userLogin = 'user';

    const users = new Users();
    const user = new User({}, userLogin);

    expect(users.exists(userLogin)).toEqual(false);
    users.add(user);
    expect(users.exists(userLogin)).toEqual(true);
    users.add(user);
    expect(users.exists(userLogin)).toEqual(true);
  });

  it('handles removing user from the list', () => {
    const userLogin = 'user';

    const users = new Users();
    const user = new User({}, userLogin);

    expect(users.exists(userLogin)).toEqual(false);
    users.add(user);
    expect(users.exists(userLogin)).toEqual(true);
    users.remove(userLogin);
    expect(users.exists(userLogin)).toEqual(false);
    users.remove(userLogin);
    expect(users.exists(userLogin)).toEqual(false);
  });

  it('handles getting user from the list', () => {
    const userLogin = 'user';

    const users = new Users();
    const user = new User({}, userLogin);

    expect(users.get(userLogin)).toEqual(null);
    users.add(user);
    expect(users.get(userLogin)).toBe(user);
  });

  it('handles getting all users names from the list', () => {
    const users = new Users();
    const expectedNames = [];

    for (let i = 0; i < 3; i += 1) {
      const name = `User${i}`;
      users.add(new User({}, name));
      expectedNames.push(name);
    }

    const names = users.getAllUserNames();
    expect(names).toMatchObject(expectedNames);
  });
});

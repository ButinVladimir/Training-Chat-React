import usersPanel from './usersPanel';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';

describe('userAppears action', () => {
  it('returns new state when user is not in the list', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
      connected: true,
    };

    const newState = usersPanel(state, actions.userAppears(user));
    expect(newState).not.toBe(state);

    state.usersPanel.usersList.push(user);
    expect(newState).toEqual(state);
  });

  it('returns same state when user is in the list', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
      usersPanel: {
        usersList: [user],
      },
      connected: true,
    };

    const newState = usersPanel(state, actions.userAppears(user));
    expect(newState).toBe(state);
  });
});

describe('userDisappears action', () => {
  it('returns new state when user is in the list', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
      usersPanel: {
        usersList: [user],
      },
      connected: true,
    };

    const newState = usersPanel(state, actions.userDisappears(user));
    expect(newState).not.toBe(state);

    state.usersPanel.usersList = [];
    expect(newState).toEqual(state);
  });

  it('returns same state when user is not in the list', () => {
    const user = 'user';
    const state = getDefaultState();

    const newState = usersPanel(state, actions.userDisappears(user));
    expect(newState).toBe(state);
  });
});

describe('updateUserList action', () => {
  it('returns new state', () => {
    const usersList = ['user1', 'user2', 'user3'];
    const state = {
      ...getDefaultState(),
      connected: true,
    };

    const newState = usersPanel(state, actions.updateUserList(usersList));
    expect(newState).not.toBe(state);

    state.usersPanel.usersList = usersList;
    expect(newState).toEqual(state);
  });
});

describe('other actions', () => {
  it('returns same state', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      connected: true,
    };

    const newState = usersPanel(state, actions.login('recipient'));
    expect(newState).toBe(state);
  });
});

describe('not connected', () => {
  it('returns same state', () => {
    const user = 'user';
    const state = getDefaultState();

    const newState = usersPanel(state, actions.userAppears(user));
    expect(newState).toBe(state);
  });
});

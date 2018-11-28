import loginPanel from './loginPanel';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';

describe('changeLogin action', () => {
  it('returns new state if user is not loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      connected: true,
    };

    const newLogin = 'newLogin';
    const newState = loginPanel(state, actions.changeLogin(newLogin));
    expect(newState).not.toBe(state);

    state.loginPanel.login = newLogin;
    expect(newState).toEqual(state);
  });

  it('returns same state if user is loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      usersPanel: {
        usersList: ['login'],
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.changeLogin('newLogin'));
    expect(newState).toBe(state);
  });
});

describe('login action', () => {
  it('returns new state if user is not loginned and not in the user list', () => {
    const login = 'login';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: false,
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).not.toBe(state);

    state.loginPanel.loginned = true;
    state.usersPanel.usersList.push(login);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is not loginned and in the user list', () => {
    const login = 'login';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: false,
      },
      usersPanel: {
        usersList: ['login'],
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).not.toBe(state);

    state.loginPanel.loginned = true;
    expect(newState).toEqual(state);
  });

  it('returns same state if login is empty', () => {
    const login = '';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: false,
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).toBe(state);
  });

  it('returns same state if user is already loginned', () => {
    const login = 'login';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: true,
      },
      usersPanel: {
        usersList: [login],
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).toBe(state);
  });
});

describe('logout action', () => {
  it('returns new state if user is loginned', () => {
    const login = 'login';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: true,
      },
      usersPanel: {
        usersList: [login],
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.logout());
    expect(newState).not.toBe(state);

    state.loginPanel.loginned = false;
    state.usersPanel.usersList = [];
    expect(newState).toEqual(state);
  });

  it('returns same state if user is already not loginned', () => {
    const login = 'login';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login,
        loginned: false,
      },
      connected: true,
    };

    const newState = loginPanel(state, actions.logout());
    expect(newState).toBe(state);
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

    const newState = loginPanel(state, actions.addTo('recipient'));
    expect(newState).toBe(state);
  });
});

describe('not connected', () => {
  it('returns same state', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).toBe(state);
  });
});

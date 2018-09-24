import loginPanel from './loginPanel';
import * as actions from '../actions';

describe('changeLogin action', () => {
  it('returns new state if user is not loginned', () => {
    const state = {
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newLogin = 'newLogin';
    const newState = loginPanel(state, actions.changeLogin(newLogin));
    expect(newState).not.toBe(state);

    state.loginPanel.login = newLogin;
    expect(newState).toEqual(state);
  });

  it('returns same state if user is loginned', () => {
    const state = {
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      usersPanel: {
        usersList: ['login'],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.changeLogin('newLogin'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

describe('login action', () => {
  it('returns new state if user is not loginned', () => {
    const login = 'login';
    const state = {
      loginPanel: {
        login,
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).not.toBe(state);

    state.loginPanel.loginned = true;
    state.usersPanel.usersList.push(login);
    expect(newState).toEqual(state);
  });

  it('returns same state if login is empty', () => {
    const login = '';
    const state = {
      loginPanel: {
        login,
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns same state if user is already loginned', () => {
    const login = 'login';
    const state = {
      loginPanel: {
        login,
        loginned: true,
      },
      usersPanel: {
        usersList: [login],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.login());
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

describe('logout action', () => {
  it('returns new state if user is loginned', () => {
    const login = 'login';
    const state = {
      loginPanel: {
        login,
        loginned: true,
      },
      usersPanel: {
        usersList: [login],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
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
      loginPanel: {
        login,
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.logout());
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

describe('other actions', () => {
  it('returns same state', () => {
    const state = {
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: '',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = loginPanel(state, actions.addTo('recipient'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

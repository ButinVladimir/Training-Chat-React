import speechPanel from './speechPanel';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';
import Message from '../../helpers/Message';

describe('changeSpeech action', () => {
  it('returns same state if user is not loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.changeSpeech('speech'));
    expect(newState).toBe(state);
  });

  it('returns new state if user is loginned', () => {
    const newSpeech = 'newSpeech';
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

    const newState = speechPanel(state, actions.changeSpeech(newSpeech));
    expect(newState).not.toBe(state);

    state.speechPanel.speech = newSpeech;
    expect(newState).toEqual(state);
  });
});

describe('say action', () => {
  it('returns same state if user is not loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      speechPanel: {
        speech: 'speech',
        to: [],
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.say('id', 'date'));
    expect(newState).toBe(state);
  });

  it('returns same state if speech is empty', () => {
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

    const newState = speechPanel(state, actions.say('id', 'date'));
    expect(newState).toBe(state);
  });

  it('returns new state if speech is not empty, not added yet and to list is empty', () => {
    const id = 'id';
    const date = 'date';
    const from = 'login';
    const to = [];
    const message = 'message';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: from,
        loginned: true,
      },
      usersPanel: {
        usersList: [from],
      },
      speechPanel: {
        speech: message,
        to,
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.say(id, date));
    expect(newState).not.toBe(state);

    state.chatPanel.messages.push(new Message(id, date, from, to, message));
    state.speechPanel.speech = '';
    expect(newState).toEqual(state);
  });

  it('returns new state if speech is not empty, not added yet and to list is not empty', () => {
    const id = 'id';
    const date = 'date';
    const from = 'login';
    const to = ['user1', 'user2'];
    const message = 'message';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: from,
        loginned: true,
      },
      usersPanel: {
        usersList: [from],
      },
      speechPanel: {
        speech: message,
        to,
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.say(id, date));
    expect(newState).not.toBe(state);

    state.chatPanel.messages.push(new Message(id, date, from, to, message));
    state.speechPanel.speech = '';
    expect(newState).toEqual(state);
  });
});

describe('addTo action', () => {
  it('returns same state if user is not loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.addTo('user'));
    expect(newState).toBe(state);
  });

  it('returns new state if user is loginned and recipient is not added yet', () => {
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

    const user = 'user';
    const newState = speechPanel(state, actions.addTo(user));
    expect(newState).not.toBe(state);

    state.speechPanel.to.push(user);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is already added', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      usersPanel: {
        usersList: ['login'],
      },
      speechPanel: {
        speech: '',
        to: [user],
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.addTo(user));
    expect(newState).toBe(state);
  });
});

describe('removeTo action', () => {
  it('returns same state if user is not loginned', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      speechPanel: {
        speech: '',
        to: ['user'],
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.removeTo('user'));
    expect(newState).toBe(state);
  });

  it('returns new state if user is loginned and recipient is already added', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      usersPanel: {
        usersList: ['login'],
      },
      speechPanel: {
        speech: '',
        to: [user],
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.removeTo(user));
    expect(newState).not.toBe(state);

    state.speechPanel.to = [];
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is not added', () => {
    const user = 'user';
    const state = {
      ...getDefaultState(),
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
      connected: true,
    };

    const newState = speechPanel(state, actions.removeTo(user));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

describe('other actions', () => {
  it('returns same state', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      connected: true,
    };

    const newState = speechPanel(state, actions.logout());
    expect(newState).toBe(state);
  });
});

describe('not connected', () => {
  it('returns same state', () => {
    const state = {
      ...getDefaultState(),
      loginPanel: {
        login: 'login',
        loginned: true,
      },
      usersPanel: {
        usersList: ['login'],
      },
    };

    const newState = speechPanel(state, actions.addTo('user'));
    expect(newState).toBe(state);
  });
});

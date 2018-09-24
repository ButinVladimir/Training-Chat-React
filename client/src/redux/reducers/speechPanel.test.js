import speechPanel from './speechPanel';
import * as actions from '../actions';
import Message from '../../helpers/Message';

describe('changeSpeech action', () => {
  it('returns same state if user is not loginned', () => {
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

    const newState = speechPanel(state, actions.changeSpeech('speech'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned', () => {
    const newSpeech = 'newSpeech';
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

    const newState = speechPanel(state, actions.changeSpeech(newSpeech));
    expect(newState).not.toBe(state);

    state.speechPanel.speech = newSpeech;
    expect(newState).toEqual(state);
  });
});

describe('say action', () => {
  it('returns same state if user is not loginned', () => {
    const state = {
      loginPanel: {
        login: 'login',
        loginned: false,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: 'speech',
        to: [],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = speechPanel(state, actions.say('id', 'date'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns same state if speech is empty', () => {
    const state = {
      loginPanel: {
        login: 'login',
        loginned: true,
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

    const newState = speechPanel(state, actions.say('id', 'date'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state if speech is not empty, not added yet and to list is empty', () => {
    const id = 'id';
    const date = 'date';
    const from = 'login';
    const to = [];
    const message = 'message';
    const state = {
      loginPanel: {
        login: from,
        loginned: true,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: message,
        to,
      },
      chatPanel: {
        messages: [],
      },
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
      loginPanel: {
        login: from,
        loginned: true,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: message,
        to,
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = speechPanel(state, actions.say(id, date));
    expect(newState).not.toBe(state);

    state.chatPanel.messages.push(new Message(id, date, from, to, message));
    state.speechPanel.speech = '';
    expect(newState).toEqual(state);
  });

  it('returns same state if speech is not empty and is already added', () => {
    const id = 'id';
    const date = 'date';
    const from = 'login';
    const to = ['user1', 'user2'];
    const message = 'message';
    const state = {
      loginPanel: {
        login: from,
        loginned: true,
      },
      usersPanel: {
        usersList: [],
      },
      speechPanel: {
        speech: message,
        to,
      },
      chatPanel: {
        messages: [new Message(id, date, from, to, message)],
      },
    };

    const newState = speechPanel(state, actions.say(id, date));
    expect(newState).not.toBe(state);

    state.speechPanel.speech = '';
    expect(newState).toEqual(state);
  });
});

describe('addTo action', () => {
  it('returns same state if user is not loginned', () => {
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

    const newState = speechPanel(state, actions.addTo('user'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is not added yet', () => {
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

    const user = 'user';
    const newState = speechPanel(state, actions.addTo(user));
    expect(newState).not.toBe(state);

    state.speechPanel.to.push(user);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is already added', () => {
    const user = 'user';
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
        to: [user],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = speechPanel(state, actions.addTo(user));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

describe('removeTo action', () => {
  it('returns same state if user is not loginned', () => {
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
        to: ['user'],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = speechPanel(state, actions.removeTo('user'));
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is already added', () => {
    const user = 'user';
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
        to: [user],
      },
      chatPanel: {
        messages: [],
      },
    };

    const newState = speechPanel(state, actions.removeTo(user));
    expect(newState).not.toBe(state);

    state.speechPanel.to = [];
    expect(newState).toEqual(state);
  });

  it('returns new state if user is loginned and recipient is not added yet', () => {
    const user = 'user';
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

    const newState = speechPanel(state, actions.removeTo(user));
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

    const newState = speechPanel(state, actions.login());
    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });
});

import chatPanel from './chatPanel';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';
import Message from '../../helpers/Message';

describe('getMessage action', () => {
  it('returns new state when message is not empty', () => {
    const message = 'Message text';
    const from = 'from';
    const to = [];
    const id = 'id';
    const date = '1/1/18';
    const state = {
      ...getDefaultState(),
      usersPanel: {
        usersList: ['from'],
      },
      connected: true,
    };

    const newState = chatPanel(state, actions.getMessage(message, from, to, id, date));
    expect(newState).not.toBe(state);

    state.chatPanel.messages.push(new Message(id, date, from, to, message));
    expect(newState).toEqual(state);
  });

  it('returns same state when message is empty', () => {
    const message = '';
    const from = 'from';
    const to = [];
    const id = 'id';
    const date = '1/1/18';
    const state = {
      ...getDefaultState(),
      usersPanel: {
        usersList: ['from'],
      },
      connected: true,
    };

    const newState = chatPanel(state, actions.getMessage(message, from, to, id, date));
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

    const newState = chatPanel(state, actions.login('recipient'));
    expect(newState).toBe(state);
  });
});

describe('not connected', () => {
  it('returns same state', () => {
    const message = 'Message text';
    const from = 'from';
    const to = [];
    const id = 'id';
    const date = '1/1/18';
    const state = {
      ...getDefaultState(),
      usersPanel: {
        usersList: ['from'],
      },
    };

    const newState = chatPanel(state, actions.getMessage(message, from, to, id, date));
    expect(newState).toBe(state);
  });
});

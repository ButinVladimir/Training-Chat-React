import connected from './connected';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';

describe('connect action', () => {
  it('returns new state when disconnected and error is not shown', () => {
    const state = getDefaultState();

    const newState = connected(state, actions.connect());

    expect(newState).not.toBe(state);
    state.connected = true;
    expect(newState).toEqual(state);
  });

  it('returns new state when disconnected and error is shown', () => {
    const state = {
      ...getDefaultState(),
      errorPanel: {
        showError: true,
        error: 'An error message',
      },
    };

    const newState = connected(state, actions.connect());

    expect(newState).not.toBe(state);
    state.errorPanel = {
      showError: false,
      error: '',
    };
    state.connected = true;
    expect(newState).toEqual(state);
  });

  it('returns new state when connected and error is not shown', () => {
    const state = {
      ...getDefaultState(),
      connected: true,
    };

    const newState = connected(state, actions.connect());

    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state when connected and error is shown', () => {
    const state = {
      ...getDefaultState(),
      errorPanel: {
        showError: true,
        error: 'An error message',
      },
      connected: true,
    };

    const newState = connected(state, actions.connect());

    expect(newState).not.toBe(state);
    state.errorPanel = {
      showError: false,
      error: '',
    };
    expect(newState).toEqual(state);
  });
});

describe('disconnect action', () => {
  it('returns new state when connected', () => {
    const state = {
      ...getDefaultState(),
      connected: true,
    };

    const newState = connected(state, actions.disconnect());

    expect(newState).not.toBe(state);
    state.connected = false;
    expect(newState).toEqual(state);
  });

  it('returns new state when disconnected', () => {
    const state = getDefaultState();

    const newState = connected(state, actions.disconnect());

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
        loginned: false,
      },
      connected: true,
    };

    const newState = connected(state, actions.login('recipient'));
    expect(newState).toBe(state);
  });
});

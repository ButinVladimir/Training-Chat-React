import errorPanel from './errorPanel';
import * as actions from '../actions';
import getDefaultState from '../getDefaultState';

describe('showError action', () => {
  it('returns new state when error is not shown', () => {
    const error = 'Error message';
    const state = getDefaultState();
    const newState = errorPanel(state, actions.showError(error));

    expect(newState).not.toBe(state);
    state.errorPanel = {
      showError: true,
      error,
    };
    expect(newState).toEqual(state);
  });

  it('returns new state when error is shown', () => {
    const error = 'Error message';
    const state = {
      ...getDefaultState(),
      errorPanel: {
        showError: true,
        error: 'Another error',
      },
    };
    const newState = errorPanel(state, actions.showError(error));

    expect(newState).not.toBe(state);
    state.errorPanel = {
      showError: true,
      error,
    };
    expect(newState).toEqual(state);
  });
});

describe('hideError action', () => {
  it('returns new state when error is not shown', () => {
    const state = getDefaultState();
    const newState = errorPanel(state, actions.hideError());

    expect(newState).not.toBe(state);
    expect(newState).toEqual(state);
  });

  it('returns new state when error is shown', () => {
    const state = {
      ...getDefaultState(),
      errorPanel: {
        showError: true,
        error: 'An error message',
      },
    };
    const newState = errorPanel(state, actions.hideError());

    expect(newState).not.toBe(state);
    state.errorPanel = {
      showError: false,
      error: '',
    };
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

    const newState = errorPanel(state, actions.login('recipient'));
    expect(newState).toBe(state);
  });
});

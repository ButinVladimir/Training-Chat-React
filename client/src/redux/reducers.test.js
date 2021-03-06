import reducers from './reducers';

describe('reducers', () => {
  it('returns default state', () => {
    const cleanState = {
      loginPanel: {
        loginned: false,
        login: '',
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
      connected: false,
      errorPanel: {
        showError: false,
        error: '',
      },
    };
    const newState = reducers(undefined, 'TEST_ACTION');

    expect(newState).not.toBe(cleanState);
    expect(newState).toEqual(cleanState);
  });
});

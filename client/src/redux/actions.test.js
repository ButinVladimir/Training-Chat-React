import * as actions from './actions';
import * as actionTypes from './actionTypes';

describe('actions', () => {
  it('creates changeLogin action', () => {
    const newLogin = 'newLogin';
    const action = actions.changeLogin(newLogin);

    expect(action).toEqual({
      type: actionTypes.CHANGE_LOGIN,
      loginValue: newLogin,
    });
  });

  it('creates login action', () => {
    const action = actions.login();

    expect(action).toEqual({
      type: actionTypes.LOGIN,
    });
  });

  it('creates logout action', () => {
    const action = actions.logout();

    expect(action).toEqual({
      type: actionTypes.LOGOUT,
    });
  });

  it('creates changeSpeech action', () => {
    const newSpeech = 'newSpeech';
    const action = actions.changeSpeech(newSpeech);

    expect(action).toEqual({
      type: actionTypes.CHANGE_SPEECH,
      speechValue: newSpeech,
    });
  });

  it('creates say action', () => {
    const id = 'id';
    const date = new Date().toDateString();
    const action = actions.say(id, date);

    expect(action).toEqual({
      type: actionTypes.SAY,
      id,
      date,
    });
  });

  it('creates addTo action', () => {
    const recipient = 'recipient';
    const action = actions.addTo(recipient);

    expect(action).toEqual({
      type: actionTypes.ADD_TO,
      recipient,
    });
  });

  it('creates removeTo action', () => {
    const recipient = 'recipient';
    const action = actions.removeTo(recipient);

    expect(action).toEqual({
      type: actionTypes.REMOVE_TO,
      recipient,
    });
  });

  it('creates connect action', () => {
    const action = actions.connect();

    expect(action).toEqual({
      type: actionTypes.CONNECT,
    });
  });

  it('creates disconnect action', () => {
    const action = actions.disconnect();

    expect(action).toEqual({
      type: actionTypes.DISCONNECT,
    });
  });

  it('creates showError action', () => {
    const error = 'Test error';
    const action = actions.showError(error);

    expect(action).toEqual({
      type: actionTypes.SHOW_ERROR,
      error,
    });
  });

  it('creates hideError action', () => {
    const action = actions.hideError();

    expect(action).toEqual({
      type: actionTypes.HIDE_ERROR,
    });
  });

  it('creates userAppears action', () => {
    const login = 'userLogin';
    const action = actions.userAppears(login);

    expect(action).toEqual({
      type: actionTypes.USER_APPEARS,
      login,
    });
  });

  it('creates userDisappears action', () => {
    const login = 'userLogin';
    const action = actions.userDisappears(login);

    expect(action).toEqual({
      type: actionTypes.USER_DISAPPEARS,
      login,
    });
  });

  it('creates getMessage action', () => {
    const message = 'This is a message';
    const from = 'fromUser';
    const to = ['user1', 'user2'];
    const id = 'messageId';
    const date = '1/1/2018';
    const action = actions.getMessage(message, from, to, id, date);

    expect(action).toEqual({
      type: actionTypes.GET_MESSAGE,
      message,
      from,
      to,
      id,
      date,
    });
  });

  it('creates updateUserList action', () => {
    const users = ['user1', 'user2', 'user3'];
    const action = actions.updateUserList(users);

    expect(action).toEqual({
      type: actionTypes.UPDATE_USER_LIST,
      users,
    });
  });
});

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
});

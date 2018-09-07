import * as actionTypes from './actionTypes';

export const changeLogin = loginValue => ({
  type: actionTypes.CHANGE_LOGIN,
  loginValue,
});

export const login = () => ({
  type: actionTypes.LOGIN,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const changeSpeech = speechValue => ({
  type: actionTypes.CHANGE_SPEECH,
  speechValue,
});

export const say = (id, date) => ({
  type: actionTypes.SAY,
  id,
  date,
});

export const addTo = recipient => ({
  type: actionTypes.ADD_TO,
  recipient,
});

export const removeTo = recipient => ({
  type: actionTypes.REMOVE_TO,
  recipient,
});

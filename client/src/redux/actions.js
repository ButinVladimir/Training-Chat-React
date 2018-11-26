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

export const connect = () => ({
  type: actionTypes.CONNECT,
});

export const disconnect = () => ({
  type: actionTypes.DISCONNECT,
});

export const showError = error => ({
  type: actionTypes.SHOW_ERROR,
  error,
});

export const hideError = () => ({
  type: actionTypes.HIDE_ERROR,
});

export const userAppears = userLogin => ({
  type: actionTypes.USER_APPEARS,
  login: userLogin,
});

export const userDisappears = userLogin => ({
  type: actionTypes.USER_DISAPPEARS,
  login: userLogin,
});

export const getMessage = (message, from, to, id, date) => ({
  type: actionTypes.GET_MESSAGE,
  message,
  from,
  to,
  id,
  date,
});

export const updateUserList = users => ({
  type: actionTypes.UPDATE_USER_LIST,
  users,
});

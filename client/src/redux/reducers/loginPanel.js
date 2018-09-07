import * as actionTypes from '../actionTypes';

export default function loginPanel(state, action) {
  const { loginPanel: loginPanelState, usersPanel: usersPanelState } = state;
  let usersList;

  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      if (!loginPanelState.loginned) {
        return {
          ...state,
          loginPanel: {
            ...loginPanelState,
            login: action.loginValue,
          },
        };
      }
      break;

    case actionTypes.LOGIN:
      if (loginPanelState.login !== '' && !state.loginPanel.loginned) {
        usersList = usersPanelState.usersList.find(v => v === loginPanelState.login)
          ? usersPanelState.usersList
          : usersPanelState.usersList.concat(loginPanelState.login);

        return {
          ...state,
          loginPanel: {
            ...loginPanelState,
            loginned: true,
          },
          usersPanel: {
            ...usersPanelState,
            usersList,
          },
        };
      }
      break;

    case actionTypes.LOGOUT:
      if (loginPanelState.loginned) {
        usersList = usersPanelState.usersList.filter(v => v !== loginPanelState.login);

        return {
          ...state,
          loginPanel: {
            ...loginPanelState,
            loginned: false,
          },
          usersPanel: {
            ...usersPanelState,
            usersList,
          },
        };
      }
      break;

    default:
      return state;
  }

  return state;
}

import * as actionTypes from '../actionTypes';

const loginPanel = (state, action) => {
  const { usersPanel: usersPanelState } = state;
  let usersList;

  switch (action.type) {
    case actionTypes.USER_APPEARS:
      usersList = usersPanelState.usersList.find(v => v === action.login)
        ? usersPanelState.usersList
        : usersPanelState.usersList.concat(action.login);

      return {
        ...state,
        usersPanel: {
          ...usersPanelState,
          usersList,
        },
      };

    case actionTypes.USER_DISAPPEARS:
      usersList = usersPanelState.usersList.filter(v => v !== action.login);

      return {
        ...state,
        usersPanel: {
          ...usersPanelState,
          usersList,
        },
      };

    case actionTypes.UPDATE_USER_LIST:
      usersList = action.users.concat();

      return {
        ...state,
        usersPanel: {
          ...usersPanelState,
          usersList,
        },
      };

    default:
      return state;
  }
};

export default loginPanel;

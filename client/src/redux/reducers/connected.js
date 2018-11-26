import * as actionTypes from '../actionTypes';
import getDefaultState from '../getDefaultState';

const connected = (state, action) => {
  switch (action.type) {
    case actionTypes.CONNECT:
      return {
        ...state,
        connected: true,
        errorPanel: {
          showError: false,
          error: '',
        },
      };

    case actionTypes.DISCONNECT:
      return getDefaultState();

    default:
      return state;
  }
};

export default connected;

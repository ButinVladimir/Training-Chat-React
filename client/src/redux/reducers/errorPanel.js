import * as actionTypes from '../actionTypes';

const errorPanel = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ERROR:
      return {
        ...state,
        errorPanel: {
          showError: true,
          error: action.error,
        },
      };

    case actionTypes.HIDE_ERROR:
      return {
        ...state,
        errorPanel: {
          showError: false,
          error: '',
        },
      };

    default:
      return state;
  }
};

export default errorPanel;

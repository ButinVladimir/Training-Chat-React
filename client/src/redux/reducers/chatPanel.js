import * as actionTypes from '../actionTypes';
import Message from '../../helpers/Message';

const loginPanel = (state, action) => {
  const { chatPanel: chatPanelState } = state;

  switch (action.type) {
    case actionTypes.GET_MESSAGE:
      if (action.message) {
        const message = new Message(
          action.id,
          action.date,
          action.from,
          action.to.concat(),
          action.message,
        );
        const messages = chatPanelState.messages.concat(message);

        return {
          ...state,
          chatPanel: {
            ...chatPanelState,
            messages,
          },
        };
      }
      break;

    default:
      return state;
  }

  return state;
};

export default loginPanel;

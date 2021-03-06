import * as actionTypes from '../actionTypes';
import Message from '../../helpers/Message';

export default function speechPanel(state, action) {
  const {
    loginPanel: loginPanelState,
    speechPanel: speechPanelState,
    chatPanel: chatPanelState,
    connected,
  } = state;
  let to;
  let message;
  let messages;

  if (!loginPanelState.loginned || !connected) {
    return state;
  }

  switch (action.type) {
    case actionTypes.CHANGE_SPEECH:
      return {
        ...state,
        speechPanel: {
          ...speechPanelState,
          speech: action.speechValue,
        },
      };

    case actionTypes.SAY:
      if (speechPanelState.speech !== '') {
        message = new Message(
          action.id,
          action.date,
          loginPanelState.login,
          speechPanelState.to.concat(),
          speechPanelState.speech,
        );
        messages = chatPanelState.messages.concat(message);

        return {
          ...state,
          speechPanel: {
            ...speechPanelState,
            speech: '',
          },
          chatPanel: {
            ...chatPanelState,
            messages,
          },
        };
      }

      return state;

    case actionTypes.ADD_TO:
      if (speechPanelState.to.find(v => v === action.recipient)) {
        return state;
      }

      to = speechPanelState.to.concat(action.recipient);

      return {
        ...state,
        speechPanel: {
          ...speechPanelState,
          to,
        },
      };

    case actionTypes.REMOVE_TO:
      to = speechPanelState.to.filter(v => v !== action.recipient);

      return {
        ...state,
        speechPanel: {
          ...speechPanelState,
          to,
        },
      };

    default:
      return state;
  }
}

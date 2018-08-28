import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NotConnectedPopup from './notConnectedPopup/NotConnectedPopup';
import MessagesList from './messagesList/MessagesList';
import { messageShape } from '../../helpers/Message';

function ChatScreen({ connected, messages, onClickUser }) {
  return (
    <Fragment>
      {!connected && <NotConnectedPopup />}
      {connected && <MessagesList messages={messages} onClickUser={onClickUser} />}
    </Fragment>
  );
}

ChatScreen.propTypes = {
  connected: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape(messageShape)).isRequired,
  onClickUser: PropTypes.func.isRequired,
};

export default ChatScreen;
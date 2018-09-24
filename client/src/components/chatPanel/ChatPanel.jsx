import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NotConnectedPopup from './notConnectedPopup/NotConnectedPopup';
import MessagesList from './messagesList/MessagesListContainer';

function ChatPanel({ connected }) {
  return (
    <Fragment>
      {!connected && <NotConnectedPopup />}
      {connected && <MessagesList />}
    </Fragment>
  );
}

ChatPanel.propTypes = {
  connected: PropTypes.bool.isRequired,
};

export default ChatPanel;

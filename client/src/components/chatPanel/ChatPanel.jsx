import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NotConnectedPopup from './notConnectedPopup/NotConnectedPopup';
import MessagesList from './messagesList/MessagesListContainer';

function ChatPanel({ connected, onClickUser }) {
  return (
    <Fragment>
      {!connected && <NotConnectedPopup />}
      {connected && <MessagesList onClickUser={onClickUser} />}
    </Fragment>
  );
}

ChatPanel.propTypes = {
  connected: PropTypes.bool.isRequired,
  onClickUser: PropTypes.func.isRequired,
};

export default ChatPanel;

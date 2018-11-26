import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ErrorPanel from './errorPanel/ErrorPanelContainer';
import MessagesList from './messagesList/MessagesListContainer';

function ChatPanel({ showError, socket }) {
  return (
    <Fragment>
      {showError && <ErrorPanel />}
      {!showError && <MessagesList socket={socket} />}
    </Fragment>
  );
}

ChatPanel.propTypes = {
  showError: PropTypes.bool.isRequired,
  socket: PropTypes.any.isRequired,
};

export default ChatPanel;

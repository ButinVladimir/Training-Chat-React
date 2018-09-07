import React from 'react';
import PropTypes from 'prop-types';
import Message from './MessageContainer';
import { messageShape } from '../../../helpers/Message';
import './style.css';

function MessagesList({ messages }) {
  const convertedMessages = messages.map(message => (
    <Message key={message.id} {...message} />
  ));

  return (
    <div className="chat-messages-list-container">
      <ul className="chat-messages-list">
        {convertedMessages}
      </ul>
    </div>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(messageShape)).isRequired,
};

export default MessagesList;

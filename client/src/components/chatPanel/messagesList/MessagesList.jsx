import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { messageShape } from '../../../helpers/Message';
import './style.css';

function MessagesList({ messages, onClickUser }) {
  const convertedMessages = messages.map(message => (
    <Message key={message.id} {...message} onClickUser={onClickUser} />
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
  onClickUser: PropTypes.func.isRequired,
};

export default MessagesList;

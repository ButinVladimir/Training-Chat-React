import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'socket.io-client';
import Message from './MessageContainer';
import { messageShape } from '../../../helpers/Message';
import './style.css';

class MessagesList extends Component {
  componentWillUnmount() {
    const { handlers, socket } = this.props;
    handlers.forEach((handler, event) => {
      socket.off(event, handler);
    });
  }

  render() {
    const { messages } = this.props;
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
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(messageShape)).isRequired,
  handlers: PropTypes.instanceOf(Map).isRequired,
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default MessagesList;

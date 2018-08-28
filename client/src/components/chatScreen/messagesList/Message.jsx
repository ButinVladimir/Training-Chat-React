import React from 'react';
import PropTypes from 'prop-types';
import { messageShape } from '../../../helpers/Message';

function Message({
  date,
  from,
  to,
  message,
  onClickUser,
}) {
  const convertedTo = to
    ? to.map(t => (
      <button
        type="button"
        key={t}
        className="user-select to"
      >
        {`@${t}`}
      </button>))
    : [];

  return (
    <li className="chat-message" key={message.id}>
      <span className="date">{`[${date}]`}</span>
      <button
        type="button"
        className="user-select from"
        onClick={() => onClickUser(from)}
      >
        {`${from}: `}
      </button>
      {convertedTo}
      <span className="message">{message}</span>
    </li>
  );
}

Message.propTypes = {
  ...messageShape,
  onClickUser: PropTypes.func.isRequired,
};

export default Message;

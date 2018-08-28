import PropTypes from 'prop-types';

class Message {
  constructor(id, date, from, to, message) {
    this.id = id;
    this.date = date;
    this.from = from;
    this.to = to;
    this.message = message;
  }
}

const messageShape = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.arrayOf(PropTypes.string),
  message: PropTypes.string.isRequired,
};

export default Message;
export { messageShape };

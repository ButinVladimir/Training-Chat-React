import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Socket } from 'socket.io-client';
import MessagesList from './MessagesList';
import { getMessage } from '../../../redux/actions';
import { GET_MESSAGE } from '../../../helpers/socketEvents';
import getId from '../../../helpers/getId';
import getDate from '../../../helpers/getDate';

const mapStateToProps = state => ({
  messages: state.chatPanel.messages,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const handler = (message, from, to) => {
    dispatch(getMessage(message, from, to, getId(), getDate()));
  };

  ownProps.socket.on(GET_MESSAGE, handler);

  return {
    handlers: new Map([[GET_MESSAGE, handler]]),
  };
};

const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList);

MessagesListContainer.propTypes = {
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default MessagesListContainer;

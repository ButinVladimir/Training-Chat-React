import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessagesList from './MessagesList';
import { getMessage } from '../../../redux/actions';
import { GET_MESSAGE } from '../../../socket-events';
import getId from '../../../getId';
import getDate from '../../../getDate';

const mapStateToProps = state => ({
  messages: state.chatPanel.messages,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  ownProps.socket.on(GET_MESSAGE, (message, from, to) => {
    dispatch(getMessage(message, from, to, getId(), getDate()));
  });

  return {};
};

const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList);

MessagesListContainer.propTypes = {
  socket: PropTypes.any.isRequired,
};

export default MessagesListContainer;

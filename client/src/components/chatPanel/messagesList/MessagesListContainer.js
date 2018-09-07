import { connect } from 'react-redux';
import MessagesList from './MessagesList';

const mapStateToProps = state => ({
  messages: state.chatPanel.messages,
});

const MessagesListContainer = connect(mapStateToProps)(MessagesList);

export default MessagesListContainer;

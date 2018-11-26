import { connect } from 'react-redux';
import ChatPanel from './ChatPanel';

const mapStateToProps = state => ({
  showError: state.errorPanel.showError,
});

const ChatPanelContainer = connect(mapStateToProps)(ChatPanel);

export default ChatPanelContainer;

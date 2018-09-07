import { connect } from 'react-redux';
import Message from './Message';
import { addTo } from '../../../redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClickUser: user => dispatch(addTo(user)),
});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;

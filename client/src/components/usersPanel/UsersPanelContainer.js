import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersPanel from './UsersPanel';
import { userAppears, userDisappears, updateUserList } from '../../redux/actions';
import { USER_APPEARS, USER_DISAPPEARS, UPDATE_USER_LIST } from '../../socket-events';

const mapStateToProps = state => ({
  usersList: state.usersPanel.usersList,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  ownProps.socket.on(USER_APPEARS, login => dispatch(userAppears(login)));
  ownProps.socket.on(USER_DISAPPEARS, login => dispatch(userDisappears(login)));
  ownProps.socket.on(UPDATE_USER_LIST, users => dispatch(updateUserList(users)));

  return {};
};

const UsersPanelContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPanel);

UsersPanelContainer.propTypes = {
  socket: PropTypes.any.isRequired,
};

export default UsersPanelContainer;

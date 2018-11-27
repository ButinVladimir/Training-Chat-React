import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Socket } from 'socket.io-client';
import UsersPanel from './UsersPanel';
import { userAppears, userDisappears, updateUserList } from '../../redux/actions';
import { USER_APPEARS, USER_DISAPPEARS, UPDATE_USER_LIST } from '../../helpers/socketEvents';

const mapStateToProps = state => ({
  usersList: state.usersPanel.usersList,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const userAppearsHandler = login => dispatch(userAppears(login));
  const userDisappearsHandler = login => dispatch(userDisappears(login));
  const updateUserListHandler = users => dispatch(updateUserList(users));

  ownProps.socket.on(USER_APPEARS, userAppearsHandler);
  ownProps.socket.on(USER_DISAPPEARS, userDisappearsHandler);
  ownProps.socket.on(UPDATE_USER_LIST, updateUserListHandler);

  return {
    handlers: new Map([
      [USER_APPEARS, userAppearsHandler],
      [USER_DISAPPEARS, userDisappearsHandler],
      [UPDATE_USER_LIST, updateUserListHandler],
    ]),
  };
};

const UsersPanelContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPanel);

UsersPanelContainer.propTypes = {
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default UsersPanelContainer;

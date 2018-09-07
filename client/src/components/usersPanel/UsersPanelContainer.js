import { connect } from 'react-redux';
import UsersPanel from './UsersPanel';

const mapStateToProps = state => ({
  usersList: state.usersPanel.usersList,
});

const UsersPanelContainer = connect(mapStateToProps)(UsersPanel);

export default UsersPanelContainer;

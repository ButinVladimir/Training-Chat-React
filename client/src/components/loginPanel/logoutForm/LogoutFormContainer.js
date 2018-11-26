import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoutForm from './LogoutForm';
import { logout } from '../../../redux/actions';
import { LOGOUT, LOGOUT_SUCCESSFUL } from '../../../socket-events';

const mapStateToProps = (state, ownProps) => ({
  login: state.loginPanel.login,
  onLogout: () => ownProps.socket.emit(LOGOUT, state.loginPanel.login),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  ownProps.socket.on(LOGOUT_SUCCESSFUL, () => {
    dispatch(logout());
  });

  return {};
};

const LogoutFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

LogoutFormContainer.propTypes = {
  socket: PropTypes.any.isRequired,
};

export default LogoutFormContainer;

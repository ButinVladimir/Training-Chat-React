import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Socket } from 'socket.io-client';
import LogoutForm from './LogoutForm';
import { logout } from '../../../redux/actions';
import { LOGOUT, LOGOUT_SUCCESSFUL } from '../../../helpers/socketEvents';

const mapStateToProps = (state, ownProps) => ({
  login: state.loginPanel.login,
  onLogout: () => ownProps.socket.emit(LOGOUT, state.loginPanel.login),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const handler = () => {
    dispatch(logout());
  };

  ownProps.socket.on(LOGOUT_SUCCESSFUL, handler);

  return {
    handlers: new Map([[LOGOUT_SUCCESSFUL, handler]]),
  };
};

const LogoutFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

LogoutFormContainer.propTypes = {
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default LogoutFormContainer;

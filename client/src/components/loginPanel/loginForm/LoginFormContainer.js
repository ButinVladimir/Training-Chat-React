import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Socket } from 'socket.io-client';
import LoginForm from './LoginForm';
import { changeLogin, login, showError } from '../../../redux/actions';
import { LOGIN, LOGIN_SUCCESSFUL } from '../../../helpers/socketEvents';

const mapStateToProps = state => ({
  login: state.loginPanel.login,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const handler = () => {
    dispatch(login());
  };

  ownProps.socket.on(LOGIN_SUCCESSFUL, handler);

  return {
    onChangeLogin: loginValue => dispatch(changeLogin(loginValue)),
    dispatch,
    handlers: new Map([[LOGIN_SUCCESSFUL, handler]]),
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const mergedProps = {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onLogin: () => {
      if (stateProps.login) {
        ownProps.socket.emit(LOGIN, stateProps.login);
      } else {
        dispatchProps.dispatch(showError('Login can\'t be empty'));
      }
    },
  };

  delete mergedProps.dispatch;

  return mergedProps;
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginForm);

LoginFormContainer.propTypes = {
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default LoginFormContainer;

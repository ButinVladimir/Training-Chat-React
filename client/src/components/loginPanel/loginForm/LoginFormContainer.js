import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { changeLogin, login, showError } from '../../../redux/actions';
import { LOGIN, LOGIN_SUCCESSFUL } from '../../../socket-events';

const mapStateToProps = state => ({
  login: state.loginPanel.login,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  ownProps.socket.on(LOGIN_SUCCESSFUL, () => {
    dispatch(login());
  });

  return {
    onChangeLogin: loginValue => dispatch(changeLogin(loginValue)),
    dispatch,
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
  socket: PropTypes.any.isRequired,
};

export default LoginFormContainer;

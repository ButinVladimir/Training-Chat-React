import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { changeLogin, login } from '../../../redux/actions';

const mapStateToProps = state => ({
  login: state.loginPanel.login,
});

const mapDispatchToProps = dispatch => ({
  onChangeLogin: loginValue => dispatch(changeLogin(loginValue)),
  onLogin: () => dispatch(login()),
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;

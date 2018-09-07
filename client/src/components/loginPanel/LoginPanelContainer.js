import { connect } from 'react-redux';
import LoginPanel from './LoginPanel';

const mapStateToProps = state => ({
  loginned: state.loginPanel.loginned,
});

const LogoutFormContainer = connect(mapStateToProps)(LoginPanel);

export default LogoutFormContainer;

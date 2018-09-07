import { connect } from 'react-redux';
import LogoutForm from './LogoutForm';
import { logout } from '../../../redux/actions';

const mapStateToProps = state => ({
  login: state.loginPanel.login,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

const LogoutFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

export default LogoutFormContainer;

import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './loginForm/LoginForm';
import LogoutForm from './logoutForm/LogoutForm';
import './style.css';

function LoginPanel({
  loginned,
  login,
  onChangeLogin,
  onLogin,
  onLogout,
}) {
  return (
    <div className="chat-login-panel-container">
      {!loginned && <LoginForm login={login} onChangeLogin={onChangeLogin} onLogin={onLogin} />}
      {loginned && <LogoutForm login={login} onLogout={onLogout} />}
    </div>
  );
}

LoginPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};


export default LoginPanel;

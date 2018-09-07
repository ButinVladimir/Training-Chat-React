import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './loginForm/LoginFormContainer';
import LogoutForm from './logoutForm/LogoutFormContainer';
import './style.css';

function LoginPanel({
  loginned,
}) {
  return (
    <div className="chat-login-panel-container">
      {!loginned && <LoginForm />}
      {loginned && <LogoutForm />}
    </div>
  );
}

LoginPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
};

export default LoginPanel;

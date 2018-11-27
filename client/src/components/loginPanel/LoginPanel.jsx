import React from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'socket.io-client';
import LoginForm from './loginForm/LoginFormContainer';
import LogoutForm from './logoutForm/LogoutFormContainer';
import './style.css';

function LoginPanel({
  loginned,
  socket,
}) {
  return (
    <div className="chat-login-panel-container">
      {!loginned && <LoginForm socket={socket} />}
      {loginned && <LogoutForm socket={socket} />}
    </div>
  );
}

LoginPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
  socket: PropTypes.instanceOf(Socket).isRequired,
};

export default LoginPanel;

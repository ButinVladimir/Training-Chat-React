import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function LoginForm({ login, onChangeLogin, onLogin }) {
  return (
    <div className="form-row">
      <input type="text" className="input" value={login} onChange={e => onChangeLogin(e.target.value)} />
      <button type="button" className="login" onClick={onLogin}>Login</button>
    </div>
  );
}

LoginForm.propTypes = {
  login: PropTypes.string.isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;

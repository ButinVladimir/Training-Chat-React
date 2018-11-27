import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'socket.io-client';
import './style.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
  }

  componentWillUnmount() {
    const { handlers, socket } = this.props;
    handlers.forEach((handler, event) => {
      socket.off(event, handler);
    });
  }

  render() {
    const { login, onLogin } = this.props;

    return (
      <div className="form-row">
        <input type="text" className="input" value={login} onChange={this.handleChangeLogin} />
        <button type="button" className="login" onClick={onLogin}>Login</button>
      </div>
    );
  }

  handleChangeLogin(e) {
    this.props.onChangeLogin(e.target.value);
  }
}

LoginForm.propTypes = {
  login: PropTypes.string.isRequired,
  handlers: PropTypes.instanceOf(Map).isRequired,
  socket: PropTypes.instanceOf(Socket).isRequired,
  onChangeLogin: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;

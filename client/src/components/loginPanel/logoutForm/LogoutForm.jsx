import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'socket.io-client';

class LogoutForm extends Component {
  componentWillUnmount() {
    const { handlers, socket } = this.props;
    handlers.forEach((handler, event) => {
      socket.off(event, handler);
    });
  }

  render() {
    const { login, onLogout } = this.props;

    return (
      <Fragment>
        <div className="form-row">
          <span>You are loginned as </span>
          <strong>{login}</strong>
        </div>
        <div className="form-row">
          <button type="button" className="logout" onClick={onLogout}>Logout</button>
        </div>
      </Fragment>
    );
  }
}

LogoutForm.propTypes = {
  login: PropTypes.string.isRequired,
  handlers: PropTypes.instanceOf(Map).isRequired,
  socket: PropTypes.instanceOf(Socket).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutForm;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function LogoutForm({ login, onLogout }) {
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

LogoutForm.propTypes = {
  login: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutForm;

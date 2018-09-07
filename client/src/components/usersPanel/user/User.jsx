import React from 'react';
import PropTypes from 'prop-types';

function User({ user, onClickUser }) {
  return (
    <li key={user} className="user-line">
      <button
        type="button"
        className="user-select"
        onClick={onClickUser}
      >
        {user}
      </button>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.string.isRequired,
  onClickUser: PropTypes.func.isRequired,
};

export default User;

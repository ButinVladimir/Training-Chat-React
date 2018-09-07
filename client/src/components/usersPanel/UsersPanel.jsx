import React from 'react';
import PropTypes from 'prop-types';
import User from './user/UserContainer';
import './style.css';

function UsersPanel({ usersList }) {
  const convertedUsersList = usersList.map(user => (
    <User
      key={user}
      user={user}
    />
  ));

  return (
    <div className="chat-users-list-container">
      <ul className="users-list">
        {convertedUsersList}
      </ul>
    </div>
  );
}

UsersPanel.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default UsersPanel;

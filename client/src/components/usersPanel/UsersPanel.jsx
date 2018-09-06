import React from 'react';
import PropTypes from 'prop-types';
import User from './user/User';
import './style.css';

function UsersPanel({ usersList, onClickUser }) {
  const convertedUsersList = usersList.map(user => (
    <User
      key={user}
      user={user}
      onClickUser={onClickUser}
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
  onClickUser: PropTypes.func.isRequired,
};

export default UsersPanel;

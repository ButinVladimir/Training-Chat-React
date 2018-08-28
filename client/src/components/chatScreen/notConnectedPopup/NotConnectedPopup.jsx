import React from 'react';
import './style.css';

function NotConnectedPopup() {
  return (
    <div className="chat-not-connected-popup-container">
      <div className="chat-not-connected-popup">
        <div className="popup-row">Unable to connect to server</div>
        <div className="popup-row">Please try later</div>
      </div>
    </div>
  );
}

export default NotConnectedPopup;

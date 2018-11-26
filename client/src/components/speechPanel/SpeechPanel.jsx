import React from 'react';
import PropTypes from 'prop-types';
import NotLoginnedMessage from './notLoginnedMessage/NotLoginnedMessage';
import SpeechField from './speechField/SpeechFieldContainer';
import './style.css';

function SpeechPanel({
  loginned,
  socket,
}) {
  return (
    <div className="chat-speech-panel-container">
      {!loginned && <NotLoginnedMessage />}
      {loginned && (
        <SpeechField socket={socket} />
      )}
    </div>
  );
}

SpeechPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
  socket: PropTypes.any.isRequired,
};

export default SpeechPanel;

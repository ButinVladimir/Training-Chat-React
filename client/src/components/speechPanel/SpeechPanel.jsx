import React from 'react';
import PropTypes from 'prop-types';
import NotLoginnedMessage from './notLoginnedMessage/NotLoginnedMessage';
import SpeechField from './speechField/SpeechFieldContainer';
import './style.css';

function SpeechPanel({
  loginned,
}) {
  return (
    <div className="chat-speech-panel-container">
      {!loginned && <NotLoginnedMessage />}
      {loginned && (
        <SpeechField />
      )}
    </div>
  );
}

SpeechPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
};

export default SpeechPanel;

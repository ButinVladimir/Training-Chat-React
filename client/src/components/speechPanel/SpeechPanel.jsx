import React from 'react';
import PropTypes from 'prop-types';
import NotLoginnedMessage from './notLoginnedMessage/NotLoginnedMessage';
import SpeechField from './speechField/SpeechField';
import './style.css';

function SpeechPanel({
  loginned,
  speech,
  to,
  onChange,
  onSay,
  onRemoveTo,
}) {
  return (
    <div className="chat-speech-panel-container">
      {!loginned && <NotLoginnedMessage />}
      {loginned && (
        <SpeechField
          speech={speech}
          to={to}
          onChange={onChange}
          onSay={onSay}
          onRemoveTo={onRemoveTo}
        />
      )}
    </div>
  );
}

SpeechPanel.propTypes = {
  loginned: PropTypes.bool.isRequired,
  speech: PropTypes.string,
  to: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSay: PropTypes.func.isRequired,
  onRemoveTo: PropTypes.func.isRequired,
};

SpeechPanel.defaultProps = {
  speech: '',
};

export default SpeechPanel;

import React from 'react';
import PropTypes from 'prop-types';
import ToButton from './ToButtonContainer';
import './style.css';

function SpeechField({
  speech,
  to,
  onChange,
  onSay,
}) {
  const convertedTo = to.map(t => <ToButton key={t} to={t} />);

  return (
    <div className="speech-container">
      <div className="speech-input-container">
        <input className="speech" type="text" value={speech} onChange={e => onChange(e.target.value)} />
        <button className="say" type="button" onClick={onSay}>Say</button>
      </div>
      <div className="speech-to-container">
        {convertedTo}
      </div>
    </div>
  );
}

SpeechField.propTypes = {
  speech: PropTypes.string,
  to: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onSay: PropTypes.func.isRequired,
};

SpeechField.defaultProps = {
  speech: '',
};

export default SpeechField;

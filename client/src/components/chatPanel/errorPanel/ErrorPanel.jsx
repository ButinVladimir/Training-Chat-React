import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ErrorPanel({ error, onCloseError }) {
  return (
    <div className="error-panel-container">
      <div className="error-panel">
        <div className="popup-row">An error occurred</div>
        <div className="popup-row">{ error }</div>
        <div className="popup-row">
          <button className="close-button" type="button" onClick={onCloseError}>Close</button>
        </div>
      </div>
    </div>
  );
}

ErrorPanel.propTypes = {
  error: PropTypes.string,
  onCloseError: PropTypes.func.isRequired,
};

ErrorPanel.defaultProps = {
  error: '',
};

export default ErrorPanel;

import React from 'react';
import PropTypes from 'prop-types';

function ToButton({ to, onRemoveTo }) {
  return (
    <button className="to-button" type="button" onClick={onRemoveTo}>
      {`@${to}`}
    </button>
  );
}

ToButton.propTypes = {
  to: PropTypes.string.isRequired,
  onRemoveTo: PropTypes.func.isRequired,
};

export default ToButton;

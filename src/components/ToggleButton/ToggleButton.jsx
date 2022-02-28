import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import './ToggleButton.css';

function ToggeButton({ setting, initialValue }) {
  const [status, setStatus] = useState(initialValue);

  useEffect(() => {
    setting(status);
  }, [status]);

  return (

    <button
      type="button"
      className="toggle-button"
      data-active={status}
      onClick={() => setStatus(!status)}
    >
      <span className="toggle-bullet" />
    </button>

  );
}

export default ToggeButton;

ToggeButton.propTypes = {
  setting: propTypes.func,
  initialValue: propTypes.bool,
}.isRequired;

import React, { useState } from 'react';
import './ToggleButton.css';

function ToggeButton() {
  const [status, setStatus] = useState(false);

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

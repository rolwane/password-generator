import React, { useState } from 'react';

import './Toggle.css';

function Toggle() {
  const [checked, setChecked] = useState(false);

  const handleChange = ({ target }) => {
    setChecked(target.checked);
  };

  return (
    <label className="toggle-button" htmlFor="checkbox" data-active={checked}>
      <input type="checkbox" id="checkbox" onChange={handleChange} value={checked} />
      <span className="toggle__bullet" />
    </label>
  );
}

export default Toggle;

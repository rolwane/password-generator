import React, { useState } from 'react';
import './RangeInput.css';

function RangeInput() {
  const [value, setValue] = useState(10);

  const handleChange = ({ target }) => setValue(target.value);

  return (

    <div className="range-container">
      <span>6</span>

      <div className="container-input">
        <input
          type="range"
          min="6"
          max="32"
          className="slider"
          value={value}
          onChange={handleChange}
        />

        <span className="progress" style={{ width: `${((value - 6) * 100) / 26}%` }} />
        <span className="progress-bg" />
      </div>

      <span>32</span>
    </div>

  );
}

export default RangeInput;

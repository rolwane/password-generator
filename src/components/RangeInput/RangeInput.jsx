/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useContext } from 'react';
import MainContext from '../../context/Context';

import './RangeInput.css';

function RangeInput() {
  const { length, setLength } = useContext(MainContext);

  return (
    <div className="range-container">
      <span>6</span>

      <div className="container-input">
        <input
          type="range"
          min="6"
          max="32"
          className="slider"
          value={length}
          onChange={({ target }) => setLength(target.value)}
        />

        <span className="progress" style={{ width: `${((length - 6) * 100) / 26}%` }} />
        <span className="progress-bg" />
      </div>

      <span>32</span>
    </div>

  );
}

export default RangeInput;

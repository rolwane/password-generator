import React, { useContext } from 'react';
import Context from '../../context/Context';
import './Display.css';

function Display() {
  const { password } = useContext(Context);

  return (
    <input
      type="text"
      style={{ fontSize: password.length >= 22 ? '11.5px' : '18px' }}
      value={password || 'CLICK GENERATE'}
      className="display"
      disabled
    />
  );
}

export default Display;

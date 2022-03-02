import React, { useContext } from 'react';
import Context from '../../context/Context';

import './Display.css';

function Display() {
  const { password } = useContext(Context);

  const copyPassword = () => {
    navigator.clipboard.writeText(password).then(() => alert('senha copiada!'));
  };

  return (
    <button
      type="button"
      className="display"
      onClick={copyPassword}
    >
      {password || 'CLICK GENERATE'}

    </button>
  );
}

export default Display;

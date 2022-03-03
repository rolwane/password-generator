import React, { useContext } from 'react';
import Context from '../../context/Context';

import './Display.css';

function Display() {
  const { password, setAlert } = useContext(Context);

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setAlert(true);
      });
    }
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

import React, { useContext, useEffect } from 'react';
import { FaClipboardCheck } from 'react-icons/fa';
import Context from '../../context/Context';

import './Alert.css';

function Alert() {
  const { setAlert } = useContext(Context);

  const handleFadeOut = () => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  useEffect(() => handleFadeOut(), []);

  return (
    <>
      <div className="alert">
        <FaClipboardCheck className="alert-icon" />
        Senha copiada!
      </div>

      <div className="cover" />
    </>
  );
}

export default Alert;

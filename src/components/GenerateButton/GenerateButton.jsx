import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';

import './GenerateButton.css';

function GenerateButton() {
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    uppercase,
    lowercase,
    numbers,
    symbols,
  } = useContext(Context);

  useEffect(() => {
    const status = uppercase || lowercase || numbers || symbols;
    setIsDisabled(!status);
  }, [uppercase, lowercase, numbers, symbols]);

  const handleGeneratePassword = () => {

  };

  return (

    <button
      type="button"
      className="generate-button"
      disabled={isDisabled}
      onClick={handleGeneratePassword}
    >
      generate password
    </button>

  );
}

export default GenerateButton;

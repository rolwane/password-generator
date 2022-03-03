import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/Context';
import generatePassword from '../../services/generatePassword';

import './GenerateButton.css';

function GenerateButton() {
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    length, uppercase, lowercase, numbers, symbols, setPassword,
  } = useContext(Context);

  useEffect(() => {
    const status = uppercase || lowercase || numbers || symbols;
    setIsDisabled(!status);
  }, [uppercase, lowercase, numbers, symbols]);

  const handleGeneratePassword = () => {
    const options = {
      uppercase,
      lowercase,
      numbers,
      symbols,
    };

    setPassword(generatePassword(length, options));
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

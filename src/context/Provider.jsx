/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const value = {
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
    password,
    alert,

    setLength,
    setUppercase,
    setLowercase,
    setNumbers,
    setSymbols,
    setPassword,
    setAlert,
  };

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

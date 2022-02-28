/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [length, setLength] = useState(10);

  return (
    <Context.Provider value={{ length, setLength }}>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

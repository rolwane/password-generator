import React from 'react';
import propTypes from 'prop-types';

import './Option.css';

function Option({ children }) {
  return (
    <div className="option">
      {children}
    </div>
  );
}

export default Option;

Option.propTypes = {
  children: propTypes.any,
}.isRequired;

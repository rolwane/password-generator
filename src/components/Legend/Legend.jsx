import React from 'react';
import propTypes from 'prop-types';

import './Legend.css';

function Legend({ children }) {
  return <span className="legend">{children}</span>;
}

export default Legend;

Legend.propTypes = {
  children: propTypes.string,
}.isRequired;

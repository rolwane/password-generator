import React from 'react';
import propTypes from 'prop-types';

import './Setting.css';

// imported components
import Toggle from '../Toggle/Toggle';

function Setting({ title }) {
  return (
    <div className="setting">
      {title}
      <Toggle />
    </div>
  );
}

export default Setting;

Setting.propTypes = {
  title: propTypes.string,
}.isRequired;

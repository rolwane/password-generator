import React from 'react';
import propTypes from 'prop-types';

import './Setting.css';

function Setting({ title }) {
  return (
    <div className="setting">
      {title}
    </div>
  );
}

export default Setting;

Setting.propTypes = {
  title: propTypes.string,
}.isRequired;

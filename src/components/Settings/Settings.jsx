import React from 'react';

// imported components
import Option from '../Option/Option';
import ToggeButton from '../ToggleButton/ToggleButton';

function Settings() {
  return (
    <div className="container-settings">

      <Option>
        Include upercase
        <ToggeButton />
      </Option>

    </div>
  );
}

export default Settings;

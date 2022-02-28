import React, { useContext } from 'react';
import Context from '../../context/Context';

// imported components
import Option from '../Option/Option';
import ToggleButton from '../ToggleButton/ToggleButton';

function Settings() {
  const {
    uppercase,
    lowercase,
    numbers,
    symbols,

    setUppercase,
    setLowercase,
    setNumbers,
    setSymbols,
  } = useContext(Context);

  return (
    <div className="container-settings">

      <Option>
        Include uppercase
        <ToggleButton setting={setUppercase} initialValue={uppercase} />
      </Option>

      <Option>
        Include lowercase
        <ToggleButton setting={setLowercase} initialValue={lowercase} />
      </Option>

      <Option>
        Include numbers
        <ToggleButton setting={setNumbers} initialValue={numbers} />
      </Option>

      <Option>
        Include symbols
        <ToggleButton setting={setSymbols} initialValue={symbols} />
      </Option>

    </div>
  );
}

export default Settings;

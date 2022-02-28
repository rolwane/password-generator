import React, { useContext } from 'react';
import Context from '../../context/Context';
import './App.css';

// imported components
import Display from '../Display/Display';
import Legend from '../Legend/Legend';
import RangeInput from '../RangeInput/RangeInput';

function App() {
  const { length } = useContext(Context);

  return (
    <section className="box">
      <h1 className="box__title">Password Generator</h1>

      <Legend>GENERATED PASSWORD:</Legend>
      <Display />

      <Legend>
        LENGTH:
        <span>{length}</span>
      </Legend>
      <RangeInput />

      <Legend>SETTINGS:</Legend>

    </section>
  );
}

export default App;

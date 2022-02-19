import React from 'react';
import './App.css';

// imported components
import Display from '../Display/Display';
import Legend from '../Legend/Legend';
import RangeInput from '../RangeInput/RangeInput';
import Setting from '../Setting/Setting';

function App() {
  return (

    <section className="box">
      <h1 className="box__title">Password Generator</h1>

      <Legend>GENERATED PASSWORD:</Legend>
      <Display />

      <Legend>LENGTH:</Legend>
      <RangeInput />

      <Legend>SETTINGS:</Legend>
      <Setting title="Include Uppercase" />
    </section>

  );
}

export default App;

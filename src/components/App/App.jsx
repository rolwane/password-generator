/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import MainContext from '../../context';
import './App.css';

// imported components
import Display from '../Display/Display';
import Legend from '../Legend/Legend';
import RangeInput from '../RangeInput/RangeInput';

function App() {
  const [length, setLength] = useState(10);

  return (
    <MainContext.Provider value={{ length, setLength }}>
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
    </MainContext.Provider>
  );
}

export default App;

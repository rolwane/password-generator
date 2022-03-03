import React, { useContext } from 'react';
import Context from '../../context/Context';
import './App.css';

// imported components
import Display from '../Display/Display';
import Legend from '../Legend/Legend';
import RangeInput from '../RangeInput/RangeInput';
import Settings from '../Settings/Settings';
import GenerateButton from '../GenerateButton/GenerateButton';
import Alert from '../Alert/Alert';

function App() {
  const { length, alert } = useContext(Context);

  return (
    <>
      { alert && <Alert /> }

      <section className="box">
        <h1 className="box__title">Password Generator</h1>

        <Legend>generated password:</Legend>
        <Display />

        <Legend>
          length:
          <span>{length}</span>
        </Legend>
        <RangeInput />

        <Legend>settings:</Legend>
        <Settings />

        <GenerateButton />

      </section>
    </>
  );
}

export default App;

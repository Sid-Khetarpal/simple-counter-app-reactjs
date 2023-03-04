import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[counter, setCounter] = useState(0);

  const increaseCounter = ()=> {
    setCounter(counter+1);
  }
  const decreaseCounter = ()=> {
    if(counter>0){
      setCounter(counter-1);
    }
  }
  const resetCounter = ()=> {
      setCounter(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h3>Counter:{counter}</h3>
          <div className="counters">
          <button onClick={increaseCounter}>Increase Counter</button>
          <button onClick={decreaseCounter}>Decrease Counter</button>
          </div>
          <button onClick={resetCounter}>Reset Counter</button>
      </header>
    </div>
  );
}

export default App;

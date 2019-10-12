import React, { Component, useState } from 'react';
import Counter from './Counter'

const App = () => {

    const [counterShowState, setCounterShowState] = useState(true);
    const showCounterHandler = () => {
      setCounterShowState(show => !show);
    }

    //We use logical end to render the component
      //As the button is a toggle add the aria-pressed label
    return (
      <div className="App">
          <h1>Ultimate counter</h1>
          <button 
          aria-pressed={!counterShowState} 
          type="button"
          onClick={showCounterHandler}>
            Toggle counter component
          </button>
          {counterShowState && <Counter />}
      </div>
    );
}

export default App;

import React, { Component } from 'react';
import UltimateMachine from './UltimateMachine';
//Adding css to project
import './machine.css';

class App extends Component {
  render() {

    //Main element is called landmark element
      //main part of the website should be always wrapped around main element
    return (
      <main>
        <UltimateMachine />
      </main>
    );
  }
}

export default App;

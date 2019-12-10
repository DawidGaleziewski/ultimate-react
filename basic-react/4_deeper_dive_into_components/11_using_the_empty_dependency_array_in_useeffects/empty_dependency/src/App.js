import React, { Component } from 'react';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Ultimate counter</h1>
          <Counter />
      </div>
    );
  }
}

export default App;

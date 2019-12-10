import React, { Component } from 'react';

//Map - map values in one array into anopther array and decide how values got transformed
  //Important to keep in mind is that original array was not modified

    //This is a great thing for react apps, as we should NEVER:
      //Mutate array state directly
      //Mutate the props

  //React can render a array
    //map is perfect for this as it returns a array.
    //jsx returned by map function will be rendered
  
  //Using maps to render a collection is a very often used pattern in jsx

class App extends Component {
  render() {
    const arr = ['Winter', 'Summer', 'Autumn', 'Spring'];
    const arrayMod = arr.map((season, index) =>  `${season} is a season with index ${index}`)
    console.log(arr)
    console.log(arrayMod)

    return (
      <div className="App">
          <ul>
              {
                arr.map(item => <li>{item}</li>)
              }
          </ul>
      </div>
    );
  }
}

export default App;

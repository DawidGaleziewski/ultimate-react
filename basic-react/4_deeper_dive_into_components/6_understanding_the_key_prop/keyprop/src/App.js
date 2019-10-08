import React, { Component, useState } from 'react';

const App = ()=> {
  //Rendering items using map will cause a issue in console:
    //"react.development.js:175 Warning: Each child in a list should have a unique "key" prop"
    //This is due to reconciler. Always rendering and comparing lists is very expensive when it comes to performance
    //We need to provide a key prop in the parent element we are repeating
    //Key prop should have a unique string value
    //We should add a unique property present in the data or add our own
      //In example as we have unique strings we can just use same value that is in content
    
    //Key prop will not be rendered in the prop
      //It will be stripped when rendering

    //Key prop will help the reconciler when checking if anything has changed

    //It is important that we need to use unique id
    //Key prop should also be a string

    //Using index from the array is not a good option
      //The index can change and is not linked in any way to the actual value
      //This could be done with static array that will never change. But should be generally avoided

      const arr = [
        {id: 1, name: 'Winter'}, 
        {id: 2, name: 'Summer'}, 
        {id: 3, name: 'Autumn'}, 
        {id: 4, name: 'Spring'}
      ];
  
      const arr2 = [
        {id: 1, name: 'Winter'}, 
        {id: 2, name: 'Summer'}, 
        {id: 3, name: 'Autumn'}, 
        {id: 4, name: 'Spring'}
      ];

      //Using state
    const [list, setList] = useState(arr)



    //Sometimes it is good to move more complex structure like a list into its own variable so we can focus on what we literate in the return
    const displayList = arr.map(
        (item, index) => (
            <li key={index.toString()}> 
              <label htmlFor={`item-${index}`}>{item.name}</label>
              <input id={`item-${index}`} type="text"/>
            </li>
          )
        )
  

    //First array - cororect key
    //Second array - bad array
    return (
      <div className="App">
          <ul className="good">
              {
                arr.map(
                  item => (
                      <li key={item.id.toString()}>{item.name}</li>
                    )
                  )
              }
          </ul>
          <ul className="bad">
              {displayList}
          </ul>
      </div>
    );
  }


export default App;

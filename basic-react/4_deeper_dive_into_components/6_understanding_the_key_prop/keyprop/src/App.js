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
  
      const arr1 = [
        'Winter',
        'Summer',
        'Autumn',
        'Spring'
      ];

      const arr2 = [
        'Winter',
        'Autumn',
        'Spring',
        'Summer',
      ];

      //Using state
    const [list, setList] = useState(arr1)
    const onClickHandler = ()=> {
      setList(list === arr1 ? arr2 : arr1)
    }


    //Sometimes it is good to move more complex structure like a list into its own variable so we can focus on what we literate in the return
    const displayList = list.map(
        (item, index) => (
            <li key={item}> 
              <label htmlFor={`item-${index}`}>{item}</label>
              <input id={`item-${index}`} type="text"/>
            </li>
          )
        )
  

    //First array - cororect key
    //Second array - bad array - using index ass key prop

    //! When we used index as a key prop and try to use state to swap two array of lists with inputs and labels
          //! values will swap but NOT the input
          //! reconciler cannot calculate which input should be displayed in which list item
          //! This is not only costly for reconciler but also hard to troubleshoot when went wrong

    //We can use key prop with <Fragment key={uniqueid}>
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

          <button onClick={onClickHandler} type="button">Change</button>
      </div>
    );
  }


export default App;

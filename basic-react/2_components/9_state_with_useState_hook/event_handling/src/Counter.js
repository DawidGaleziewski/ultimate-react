//To use state we need to import function useState from react
    //When we call this function we recive array with two elements:
        //current value of state
        //setter function to update that value
import React, {Fragment, useState} from 'react';
    //by deconstructing the array we will get any of the two
    //useState takes a initial value of the state we will set
        //It is good idea to set the state in the beggining so that we will avoid any bugs
    


const Counter = () => {
    //This is a hook call. Hooks can be called only from body of the function component
    //Use state is a React hook
    const [counter, setCounter] = useState(0)

    const onClickHandler = () => {
        //Now we can update the state everytime the button is clicked
        setCounter(counter + 1)
    }

    return(
    <Fragment>
        <p>{counter}</p>
        <button onClick={onClickHandler} type="button">Click me!</button>
    </Fragment>)
};


export default Counter;
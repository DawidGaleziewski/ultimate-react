//We can shorten syntax from React.Fragment to Fragment
    //This is called named export
    //Using full React.Fragment is still valiable
import React, {Fragment} from 'react';

//We will need to create a handler function that will get executed when clicked
    //Compnent will return logic and not only view

const Counter = () => {
    //Note that we need to return the JSX now due to fact we do not use the arrow function shorthand
        //This is some good naming convention to look into!
    const onClickHandler = () => {
        console.log('Button was pressed');
    }

    //We attach the function by onClick tag

    return(
    <Fragment>
        <p>0</p>
        <button onClick={onClickHandler} type="button">Click me!</button>
    </Fragment>)
};


export default Counter;
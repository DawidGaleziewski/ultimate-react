import React from 'react';
import './form.css';

//Whenever we use input we probably are creating a form
//Form is a landmark element
    //It is important to use for one or number of files
    //Esential to use this tag for the screen readers
    //Despite the fact we cannot see anything by using <form/> it is important to use

//By default any input is of type text
//It is important to think about screen readers and label the inputs
//in html we use 'for' in the label however in jsx it is called htmlFor

//! just by declaring input we cannot access this input
    //Simple form is called 'uncontrolled input'. As it is not controlled by react

//In order to create controlled component we need to establish a value binding to the state of the component
    //We use a onChange handler for this

//We will bind the data from the event in e.target.value to a state we create. 
//!this is important as the react needs to be single source of thruth
    //!then we need to bind it back to the input itself
    //This will cause react to become single source of truth, binding the information in input into the state

const FormReact = ()=> {
    const [firstName, setFirstName] = React.useState('');

    const onCHangeHandler = e => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }

    return (
    <form>
        <span>Name: {firstName}</span>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" 
            onChange={onCHangeHandler}
            value = {firstName}
        />
    </form>
    )
}
export default FormReact;
import React, {useState} from 'react';
import './form.css';

// Some forms will have more then one input

const FormReact = ()=> {
    //!Doing multiple form inputs can become verbose
    // const [firstName, setFirstName] = React.useState('');
    // const [lastName, setLastName] = React.useState('')

    // const firstOnChangeHandler = e => {
    //     console.log(e.target.value)
    //     setFirstName(e.target.value)
    // }

    // const onLastNameHandler = e => {
    //     setLastName(e.target.value)
    // }

    //!we can shorten the code by holding the data inside a object
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: ''
    })

    //We will use one change handler for both forms
        //We can identify the source by the name attribute
        //With more complex forms we will usually auto generate the id to make them unique, that is why we do not use id but name, as we cannot be sure what will be the id value in more complex forms
    const onChangeHandler = e =>{
        //Our state should be imutable, that is why we cannot just change the value of object we need to create a new one
            //First we use spread operator to create a copy of the object ...
            //After that we add a new key that has same key as the name attribute and value of the input 
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
    <form>
        <span>Name: {formState.firstName} {formState.lastName}</span>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" 
            onChange={onChangeHandler}
            value = {formState.firstName}
            name="firstName"
        />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName"
            onChange={onChangeHandler}
            value= {formState.lastName}
            name="lastName"
        />
    </form>
    )
}
export default FormReact;
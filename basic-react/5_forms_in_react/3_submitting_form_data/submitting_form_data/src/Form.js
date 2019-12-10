import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: ''
    })

    const onChangeHandler = e =>{

        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }


    // Submiting data can be done eaither to server or internal logic of the application

    //We use button type submit to submit the form
        //!by default button type is submit
        //When the submit button is present in the form and is triggered it will submit the form event
            //Additional benefit is that if we would press enter in form i.e clicked on input, it will send the form
        //!Clicking the button will submit the form and refresh the site

        //Url in the browser changes to: 
            //http://localhost:34407/?firstName=&lastName=
                //This is due to fact that the form changes automatically to submit
        //! in most cases we want to change this due to two important reasons:
            //If the browser refreshes we will lose current state in ALL components
            //We want react to be single source of truth

        //We can stop this by attaching onSubmit event handler that will stop default submit action and the site refresh
        const onSubmitHandler = e => {
            e.preventDefault();
            console.log(formState)
        }

    return (
    <form onSubmit={onSubmitHandler}>
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
        <button type="submit">Save</button>
    </form>
    )
}
export default FormReact;
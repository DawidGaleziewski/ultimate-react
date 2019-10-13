import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {

    const initalState = {
        firstName: '',
        lastName: ''
    }

    const [formState, setFormState] = useState(initalState);

    const onChangeHandler = e =>{

        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
    }

    //Button that will reset the form state to inital state
    //We want the button that handles this to by type="button" as submit will submit the form and we do not want this
    //This is additional reason we want controlled state in our components
    const onClickHandler = () => {
        setFormState(initalState)
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
        <button onClick={onClickHandler} type="button">Clear values </button>
    </form>
    )
}
export default FormReact;
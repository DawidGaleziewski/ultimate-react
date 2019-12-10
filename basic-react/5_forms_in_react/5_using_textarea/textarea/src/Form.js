import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {

    //Adding textarea is same as with other items
        //1. Add it to inital state,
        //2. Add it in return html
        //3. Add label for it and id in textarea to bind them
        //4. Add on change handler
        //! 5 add value binding it with state to make this a controlled form
    const initalState = {
        firstName: '',
        lastName: '',
        biography: ''
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
        console.log(formState)
    }

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

        <label htmlFor="biography">Biography</label>
        <textarea value={formState.biography} onChange={onChangeHandler} name="biography" id="biography" cols="30" rows="10"></textarea>

        <button type="submit">Save</button>
        <button onClick={onClickHandler} type="button">Clear values </button>
    </form>
    )
}
export default FormReact;
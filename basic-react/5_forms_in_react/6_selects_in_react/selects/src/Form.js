import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {

    const initalState = {
        firstName: '',
        lastName: '',
        biography: '',
        travel: ''
    }

    //Same as with other inputs when using select:
        //1. select with label in the form jsx
        //2. add onChange handler and value to bind element to state
        //3. add new key in the state object

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

        <label htmlFor="travel">Select travel option</label>
        <select 
            name="travel" 
            id="travel"
            onChange={onChangeHandler}
            value={formState.travel}
        >
            <option value="">None selected yet</option>
            <option value="planes">Planes</option>
            <option value="trains">Trains</option>
            <option value="cars">Cars</option>
            <option value="boats">Boats</option>
        </select>

        <button type="submit">Save</button>
        <button onClick={onClickHandler} type="button">Clear values </button>
    </form>
    )
}
export default FormReact;
import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {
    //! bind to checked attribute and not usual value attribute for checkbox
        //!this will require diffrences in:
            //Input
            //State object
            //onCHangeHandler

    //By default the agree key will be asigned false value
    const initalState = {
        firstName: '',
        lastName: '',
        biography: '',
        travel: '',
        agree: false
    }

    //One difference between checbox is that we need to bind value to checked value and not value
    const [formState, setFormState] = useState(initalState);

    const onChangeHandler = e =>{
        //In case of checkbox we will also need to add a check to the target.
            //If it is a checkbox it should return e.target.checked 
            //For other inputs it will return e.target.value
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [e.target.name]: value,
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

        <label htmlFor="agree">I agree to terms and conditions</label>
        <input 
            name="agree" 
            id="agree" 
            type="checkbox"
            onChange={onChangeHandler}
            checked={formState.agree}
        />

        <button type="submit">Save</button>
        <button onClick={onClickHandler} type="button">Clear values </button>
    </form>
    )
}
export default FormReact;
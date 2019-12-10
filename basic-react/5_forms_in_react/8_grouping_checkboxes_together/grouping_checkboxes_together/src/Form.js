import React, {useState} from 'react';
import './form.css';

//Grouping checkboxes together
    //We create input checkbox
    //Add unique id to it
    //Add name that will represent value passed
    //Add on change handler
    //bind 'checked' attribute to the state
    //add label for it
    //add new value to initial state object, updating the state variable
    //!Repeat above for all checkboxes

//!We group checkboxes together by putting them in fieldset tag
    //!We label the whole fieldset by adding legent tag after it
    //legent element MUST fallow the fieldset element directly
const FormReact = ()=> {

    const initalState = {
        firstName: '',
        lastName: '',
        biography: '',
        travel: '',
        agree: false,
        breakfast: false,
        lunch: false,
        dinner: false
    }

    const [formState, setFormState] = useState(initalState);

    const onChangeHandler = e =>{
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

        <fieldset>
            <legend>Select your meals</legend>
            <input 
                type="checkbox"
                id="lunch"
                name="lunch"
                onChange={onChangeHandler}
                checked={formState.lunch}
            />
            <label htmlFor="lunch">Lunch</label>
            <input 
                type="checkbox"
                id="dinner"
                name="dinner"
                onChange={onChangeHandler}
                checked={formState.dinner}
            />
            <label htmlFor="dinner">Dinner</label>
            <input 
                type="checkbox" 
                id="breakfast"
                name="breakfast"
                onChange = {onChangeHandler}
                checked={formState.breakfast}
            />
            <label htmlFor="breakfast">Breakfast</label>
        </fieldset>

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
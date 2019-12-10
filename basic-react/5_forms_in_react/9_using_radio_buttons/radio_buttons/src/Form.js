import React, {useState} from 'react';
import './form.css';


const FormReact = ()=> {
    //Same as with grouping checkboxes we use fieldet and legend tag to wrap the radio buttons
    //!name value is very important for radio buttons as it groups them together
    //We need to do a bit more work with the redio buttons
        //checked={formState.shirtSize === 's'} - this will tell react when this button should be checked
    //We add new value in the state variable with empty string as the values returned by imputs will be such ('s', 'm', 'l')

    const initalState = {
        firstName: '',
        lastName: '',
        biography: '',
        travel: '',
        agree: false,
        breakfast: false,
        lunch: false,
        dinner: false,
        shirtSize: ''
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

        <fieldset>
            <legend>T-shirt size</legend>
            <input 
                type="radio"
                id="sizeS"
                name="shirtSize"
                value="s"
                onChange={onChangeHandler}
                checked={formState.shirtSize === 's'}
            />
            <label htmlFor="sizeS">Small size</label>
            <input 
                type="radio"
                id="sizeM"
                name="shirtSize"
                value="m"
                onChange={onChangeHandler}
                checked={formState.shirtSize === 'm'}
            />
            <label htmlFor="sizeM">Medium size</label>
            <input 
                type="radio"
                id="sizeL"
                name="shirtSize"
                value="l"
                onChange={onChangeHandler}
                checked={formState.shirtSize=== 'l'}
            />
            <label htmlFor="sizeL">Large Size</label>
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
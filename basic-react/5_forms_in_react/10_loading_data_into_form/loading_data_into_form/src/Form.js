import React, {useState} from 'react';
import './form.css';

//Creating a parent componet for form for demonstration purposes
const FormContainer = () => {
    const [data, useData] = useState(initalState);

    //We can move the form state handler to component up, however prevent default needs to go down to the form itself. Moving event to this component would expect the formContainer to know to much about FormReact
    const onSubmitHandler = formState => {
        console.log(formState)
    }

    //Change function to update the form with predefined object
    const onClickHandler = () => {
        setFormState(loadedState)
    }

    return <React.Fragment>
        <FormReact 
            onSubmit={onSubmitHandler}
            data={data}
        />
        <button 
            onClick={onClickHandler} 
            type="button"
        >
            Load data 
        </button>
    </React.Fragment>

}

const FormReact = ({onSubmit, data})=> {
    React.useEffect(()=>{
        setFormState(data)
    },[data])

    //In order to load the data into the form we need to simply update the state
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

    //Pre defined object that we can load into state, updating the form
    const loadedState = {
        firstName: 'Dawid',
        lastName: 'Galeziewski',
        biography: 'Front end dev from inception',
        travel: 'trains',
        agree: true,
        breakfast: true,
        lunch: false,
        dinner: true,
        shirtSize: 'l'
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
        onSubmit(formState)
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

    </form>
    )
}
export default FormContainer;
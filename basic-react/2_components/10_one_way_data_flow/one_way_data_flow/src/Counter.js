import React, {Fragment, useState} from 'react';

//Seperating view from test of the component so that it can be used multiple times
    //We will pass tha state and the function by props
    //View component handles how the view behaves
    //We should NOT modify directly values from Counter to Counter view here. We shoul pass the information from one component to another.
        //How counter component handles its logic should not be important for the counterView
    //uni directional data flow - data should only flow DOWN, from one component to another. 
        //Child components should never modify the values that are passed to it.
        //Each component should only modify the data it owns directly
        //If any child component needs to change its parent data it should be done via event
        //data flowing down to components.
        //Events bubbling up.
    
    //Change of state is a triger for component to re-render itself
        //Also component child component tree will be re-rendered

const CounterView = ({counterValue, onIncrement}) => {
    return(
        <Fragment>
            <p>{counterValue}</p>
            <button onClick={onIncrement} type="button">Click me!</button>
        </Fragment>
    );
}
    

//Counter component handles the logic
const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onIncrementHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <CounterView 
            counterValue={counter}
            onIncrement={onIncrementHandler}
         />
    )

};


export default Counter;
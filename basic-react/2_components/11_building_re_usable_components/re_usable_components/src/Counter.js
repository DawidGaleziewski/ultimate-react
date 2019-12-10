import React, {Fragment, useState} from 'react';
import InteractiveView from './InteractiveView';

//We can make the counterView component more interactive and extract it to seperate file    
const Counter = () => {
    const [counter, setCounter] = useState(0);
    //There is a better way of increamenting value.
        //If the change on the state depends only on previous state of that variable we can use a arrow function
    const onIncrementHandler = () => {
        setCounter(currentState => currentState + 1)
    }

    return (
        <InteractiveView 
            value={counter}
            onAction={onIncrementHandler}
            actionText = 'Increment!'
         />
    )

};


export default Counter;
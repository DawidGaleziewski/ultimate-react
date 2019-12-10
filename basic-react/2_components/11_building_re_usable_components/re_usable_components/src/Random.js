import React, {useState} from 'react';
import InteractiveView from './InteractiveView';

//We can use our interactive view for this in order to re-use same code
const Random= ()=> {
    const [randomNumber, setRandomNumber] = useState(0);
    const onRandomHandler = () => {
        setRandomNumber(Math.floor(Math.random() * 1000))
    }

    return <InteractiveView 
        value = {randomNumber}
        onAction = {onRandomHandler}
        actionText = "Randomise"
    />
}

export default Random;
import React from 'react';

const Jumbo = () => {
    //First element of the array returned by array is the value
    const counter = React.useState(0);
        const counterState = counter[0];
        const setCounter = counter[1]
    
    const [text, setText] = React.useState('');

    const getInputValue = ()=> {
        const inputValue = document.querySelector('.jumbo__input').value;
        return inputValue
    }


    return(
        <React.Fragment>
            <div className="jumbo">
                <p className="jumbo__number">{counterState}</p>
                <button onClick={()=>{setCounter(counterState + 1)}}>Increase {counterState} by 1</button>

                    <br/><br/>
                <input className="jumbo__input" type="text"/>
                <p>{text}</p>
                <button onClick={()=>{setText(text + getInputValue())}} >Add to current string</button>
                <button onClick={()=> {setText('')}}>reser value </button>
            </div>
        </React.Fragment>
    )
}

export default Jumbo;

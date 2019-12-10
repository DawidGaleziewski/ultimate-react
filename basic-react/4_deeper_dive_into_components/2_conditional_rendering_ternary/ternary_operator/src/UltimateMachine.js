import React, {useState} from 'react';

const OnMessege = () => <span>The machine is ON!</span>;
const OffMessege = () => <span>The machine is OFF!</span>


const UltimateMachine = () => {
    const [isOn, setIsOn] = useState(false);

    const onClickHandler = () => {
        setIsOn(c => !c)
    }

    //We can use simple turnery operator to shorten our code:
        //{isOn ? <OnMessege/> : <OffMessege />}
    return (
        <section className="machine">
            <h1>The Ultimate Machine</h1>
            {isOn ? <OnMessege/> : <OffMessege />}
            <button 
                aria-pressed={isOn} 
                onClick={onClickHandler} type="button">
                in/off
            </button>
        </section>
    )
};

export default UltimateMachine;
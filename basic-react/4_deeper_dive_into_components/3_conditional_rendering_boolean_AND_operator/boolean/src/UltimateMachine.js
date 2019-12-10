import React, {useState} from 'react';

//When you want to toggle a view on and off

    // {showError && <ErrorMessage/>} This works because in javascript:
      //true + something will evaluate to something
      //false + something evaluates to false
      //Therefore {showError && <ErrorMessage/>} where:
        //true && <ErrorMessage/> will return <ErrorMessage/>
        //false && <ErrorMessage/> will return false
            //(true && 4) => 4
            //(false && 4) => false
    //It is often worth it to extract this logic into its own component. We need to just pass the boolean as prop
const ErrorMessage = ({showError}) => showError ? <span>Oh noes you broke it</span> : null


const UltimateMachine = () => {
    const [showError, setShowError] = useState(false);

    const onClickHandler = () => {
        setShowError(c => !c)
    }

    return (
        <section className="machine">
            <h1>The Ultimate Machine</h1>
            {/* {showError && <ErrorMessage/>} */}
            {<ErrorMessage showError={showError} />}
            <button 
                aria-pressed={showError} 
                onClick={onClickHandler} type="button">
                Toggle error
            </button>
        </section>
    )
};

export default UltimateMachine;
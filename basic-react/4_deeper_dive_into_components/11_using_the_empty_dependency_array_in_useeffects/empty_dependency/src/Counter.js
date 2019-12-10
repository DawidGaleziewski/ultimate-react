import React, {useEffect} from 'react';


const Counter = ()=> {
    const [counter, setCounter] = React.useState(0);
    const onCountClickHandler = () => {
        setCounter(c => c + 1);
    }

    const [internalCount, setInternalCount] = React.useState(0);
    const onInternalCountClickHandler = () => {
        setInternalCount(i => i + 1)
    }

    useEffect(()=> {
        document.title = `Counter set to ${counter} | Ultimate counter`;

    }, [counter])

    // In this excersise we will use local storage
        //Button will save the current state into to local storage
    const onSaveClickHandler = () => {
        localStorage.setItem('ultimateCounter', counter);
    }

    //We want to read the local storage only when the component first renders.
        //Mounting component - First rendering of component
    //useEffect has a ability to be run only when the component is mounted

    useEffect(()=> {
        const savedCounterValue = localStorage.getItem('ultimateCounter');
                //! this operator != null will cover both null and undefined cases
                    //This is one of few times it is better to use != than !==
        if(savedCounterValue != null) {
            setCounter(parseInt(savedCounterValue, 10))
        }

        //! [] empty dependencies array - this instructs react to execute this hook only ONCE
    }, [])

    return(
        <React.Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>

            <button type="button" onClick={onInternalCountClickHandler}>
                Increment internal count
            </button>
            <button type="button" onClick={onSaveClickHandler}>
                Save to Local Storage
            </button>
        </React.Fragment>
    )
}

export default Counter;
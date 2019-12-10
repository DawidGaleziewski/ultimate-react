import React, {useEffect} from 'react';

//Side effects such as timers stoped and started
    //Code subscribes and unsubscribes to some services

//Side effects - actions affecting things outside of the component render view

//Side effects should never be a part of component render cycle

//In this part we will update the tab title that is located in the index.html each time the counter changes
    //Title is in html, it is not part of the react application
    //Therefore updating it from the component is a side effect



const Counter = ()=> {
    const [counter, setCounter] = React.useState(0);
    const onCountClickHandler = () => {
        setCounter(c => c + 1);
    }



    //We want another state that will re-render our component
    const [internalCount, setInternalCount] = React.useState(0);
    const onInternalCountClickHandler = () => {
        setInternalCount(i => i + 1)
    }

    //Due to fact that the title is not part of the react application, this is one of few situations we will need imperative code to set it
    //!example of imperative code causing side effect
    //!setting title may not seem to be impactful, but when we use a lot of functions like this performance of the app will be impacted
    //! also the side effect will block re-rendering of the view until it is done. therefore only the change of the title will block whole component render cycle

    //useEffect hook is a solution for this. This is one of the most important hooks in react

    // document.title = `Counter set to ${counter} | Ultimate counter`;

    //We move our side effect to 'useEffect' hook
        //Use efect hook will be used async every time the component is re-renderd.
        //React promises to call this function but will not block rendering of the component
        //!Async hooks were optimized to run with great efficiency
    useEffect(()=> {
        document.title = `Counter set to ${counter} | Ultimate counter`;
        console.log('title was set')
    }, [counter])

    //Notice main render return will be returned in console before 'title was set'
        //Component is rendered before title was set
        //! We can control how the code is executed and change this behaviour
            //Second param of useEffect is array of dependencies
            //[counter] dependencies will caused to effect code not to be executed unless the counter state changes
    console.log('Main render return')

    return(
        <React.Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>

            <button type="button" onClick={onInternalCountClickHandler}>
                Increment internal count
            </button>
        </React.Fragment>
    )
}

export default Counter;
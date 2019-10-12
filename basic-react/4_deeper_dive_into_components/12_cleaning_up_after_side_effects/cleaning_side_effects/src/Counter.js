import React, {useEffect} from 'react';

//Applications that have side effects, often need to clean up
    //Component that is subscribed to service, should unsubscribe once it is taken off the page

//We will create a function that will subscribe and unsubscribe to non existing service

//True constant functions, that do not use anything inside the component
    //!it is good ideas to move those kind of functions outside the component
    //It is easier to read and also in useEffect functions we do not need to add them to dependencies array
const subscribe = () => {
    console.log('Subscribed')
}

//Secondly we want to run this function when component is dismounted- removed from react dom and browser dom
    //!when we return a function from useEffect function, it becomes a cleanup function
const unsubscribed = () => {
    console.log('unsubscribe')
}

const Counter = ()=> {
    const [counter, setCounter] = React.useState(0);
    const onCountClickHandler = () => {
        setCounter(c => c + 1);
    }

    useEffect(()=> {
        document.title = `Counter set to ${counter} | Ultimate counter`;
    }, [counter])

    //Use effect subscribing to a service
        //This subscribe function does not to be put into dependencies array
            //It is due to fact it was decleared outside of the render scope of the Counter component
            //It is not part of the Counter function and we can threat is as a true constant
    useEffect(()=> {

        //Due to [] empty dependency array [], it will be run only one during the mount
        subscribe();

        //It will be run only once during the unmounting of the element
        return () => {
            unsubscribed();
        }

        //If we use the clean up function with dependencies ie [count] it will be also runned when value changes in dependencies. However it will work for the old values.
            //therefore in this example it would be 
                //subscribe - on mount
                //After changing value of dependencies:
                    //runs clean up function and unsubscribe
                    //runs effect function
    }, [])

    //To see more on how this looks we will need to add button that hides and shows component in App.js

    return(
        <React.Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>

        </React.Fragment>
    )
}

export default Counter;
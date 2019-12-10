import React, {useState, useEffect, useRef} from 'react';

//We can start counter by using setInterval
    //As it is clear side effect we want to useEffect hook
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true);
    const currentTime = useRef(0);

    useEffect(()=> {
        let interval = null;
        if(counterActive){
            //we use set interval to interpolate the time every second
            interval = setInterval(()=> {
                currentTime.current++

                //! we can also get rid of the ref and use the callback in set time
                    //setTime(t => t + 1)
                setTime(currentTime.current);
            }, 1000);
        }

       
        //If we do not kill the interval after unmounting the component it can cause memory leaks in the appliactions
        return () => {
           clearInterval(interval); 
        }
        //We only want to start the interval once the component mounts so we give it empty []
    }, [counterActive])

    const onClickHandler = () => {
        setCounterActive(c => !c)
    }

    //When we run this hovewer the second will change from 0 to 1 and then stop. the setTime will be called but it value will be 0 all the time
        //This is due to closures
        //As the useEffect is a javascript function it creates a scope. The value of the variable is snapshoted and it will remains always the same

    //Second error - as we declared time state variable inside the component we will need to add it to the dependencie
        //we can patch this by useRef hook
        //useRef is a variable that has a container, it stays the same between all renders
        //useRef does not re-render the component

    //! we do not have to add anything we decleare inside the useEffect function or outide the component to the dependencies array


    const formatedTime = new Date(time * 1000).toISOString().substr(11, 8);

    return(
        <section>
            <h1>Ultimate Stopwatch</h1>
            <span>{formatedTime}</span>
            <button aria-pressed={counterActive} type="button" onClick={onClickHandler}>Toggle stopwatch</button>
        </section>
    )
}

export default Stopwatch;
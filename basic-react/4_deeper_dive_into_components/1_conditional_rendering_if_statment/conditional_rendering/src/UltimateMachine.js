import React, {useState} from 'react';
//We can use same conditions with if to display view as we do in normal js logic

//Two components that will be rendered conditionally
const OnMessege = () => <span>The machine is ON!</span>;
const OffMessege = () => <span>The machine is OFF!</span>

//1st way - Element that controlls the conditions
const OnOff = ({isOn}) => {
  if(isOn){
      return <OnMessege />
  }  else {
      return <OffMessege />
  }
}

//Returning null is a valid way for react component to act.
    //This will return no view
const UltimateMachine = () => {
    //We will need one state variable in order to track if its currently on or off
    const [isOn, setIsOn] = useState(false);

    const onClickHandler = () => {
        setIsOn(c => !c)
    }

    //This component reporesents distinc section ov view, therefore <section> tag is in order
    //We can use aria-pressed in order to help aria users identify if this button was pressed

    //We pass isOn state variable to the component so that it knows what to render


        // 2nd way - We can also use the condition in the main component
        let message;

        if(isOn){
            //We can store  componets in variables
            message = <OnMessege />
        } else {
            message = <OffMessege />
        }

        // 3rd way - We can aslo put this into a function to sepereate the logic
        const getMessage = () => {
            if(isOn){
                //We can store  componets in variables
                return <OnMessege />
            } else {
                return <OffMessege />
            }
    
        }

    return (
        <section className="machine">
            <h1>The Ultimate Machine</h1>
            <OnOff isOn = {isOn} />
            {message}
            {getMessage()}
            <button 
                aria-pressed={isOn} 
                onClick={onClickHandler} type="button">
                in/off
            </button>
        </section>
    )
};

export default UltimateMachine;

//This works due to fact that everytime we change the state of isOn it will call the UltimateMachine function, as it owns this state, and re-render it
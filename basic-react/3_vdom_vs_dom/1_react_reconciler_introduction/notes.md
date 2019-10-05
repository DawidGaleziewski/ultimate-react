# React does not update dom directly
    *Components are build using javascript functions
        *whenever one of those functions is triggered it renders the view
            *Viwq will take under account component state and component props

# Disect code
    *when component is called first time it will create component with state of 0 and return view based on it
    * when we click the button it changes the component state to 1
        *as component has changed, componet calls the function once again.
        *React now returns new version fo the view using the new state
            *those two states are completly diffrent instances. Only thing that connects them is the state that react remembers
# VDOM
    *First render -call to componet of tree functions will create set of create element instructions.
        *those instructions are executed by react and it is able to create a vdom in memory space
        *this is a portion in memory alocated and controlled by react.
            *Information contained are:
                -component names
                -props
                -snapshot of current state
    *On first render, entire VDOM will be rendered into the DOM
    *React uses sets of API to controll the dom
        *browser paint cycle will create this and show to users
    
    *ON CHANGE
        *We have already two DOMs
            -DOM in the browser
            -VDOM in the browser
    *change is triggered by state change
        * all functions affected by the change are run, and the new tree is created
    *The whole DOM is not replaced however.
    *React uses reconciler for this purpose
        *reconciler compares the current DOM with VDOM after mutations
        *it then changes only the parts it needs in order to have best performance possible


const InteractiveView = ({value, onAction, actionText}) => {
    return(
        <Fragment>
            <p>{value}</p>
            <button onClick={onAction} type="button">{actionText}</button>
        </Fragment>
    );
} 
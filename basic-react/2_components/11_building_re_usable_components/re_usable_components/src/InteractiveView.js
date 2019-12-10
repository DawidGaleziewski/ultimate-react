import React, {Fragment} from 'react';

//Making the component more generic
const InteractiveView = ({value, onAction, actionText}) => {
    return(
        <Fragment>
            <p>{value}</p>
            <button onClick={onAction} type="button">{actionText}</button>
        </Fragment>
    );
}

export default InteractiveView;
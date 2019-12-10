import React, { useRef, Fragment } from 'react';
// For creating uniq ids
import uniqid from 'uniqid';

// !1 By using spread operator we can pass label/input values and after that pass them to input
const Input = ({ type, labelText, ...props }) => {
  // ! Problem with this is that id will be re-render
  // Changing ids in the browser is very bod for other technologies we want to use
  // We could do a useEffect with [] to do this on mount. But easier is to use useRef hook
  // When we store a value in useRef it will not change between renders, unless we change it!
  const id = useRef(uniqid());
  return (
    <Fragment>
      <label htmlFor={id.current}>{labelText}</label>
      {/* Auto generating a id for components 
      we neeed to use package uniqueid
      npm install uniqid --save
      */}
      {/* ! 1b After that we can spread rest of those inside our input  */}
      {type === 'textarea' ? (
        <textarea id={id.curren} {...props} />
      ) : (
        <input id={id.current} {...props} />
      )}
    </Fragment>
  );
};

export default Input;

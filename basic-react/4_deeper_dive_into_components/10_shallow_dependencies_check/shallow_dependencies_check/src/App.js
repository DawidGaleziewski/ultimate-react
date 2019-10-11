import React, { Component } from 'react';
//When using useEffect hook, with array param, React will do a check on dependencies
  //This is however a shallow check
    //It will compare values for simple types, ie strings and numbers
    //it will ONLY compare references for objects, arrays and functions
      //Shallow check will not compare content of a complex data type due to performance

  //We expect new object to be created when we define y
    //However in javascript the variable just carries a referance to the object in memory
    //Both y and x are carring reference to same object in memory
const App = () => {
  const x = {val1: 10};
  const y = x;

  console.log(`value of x.val1 is ${x.val1}`)
  console.log(`value of y.val1 is ${y.val1}`)
  console.log(` equation x===y is:  ${x === y}`)

  x['val2'] = 20
  console.log(` equation x===y, after x['val2] = 20 is:  ${x === y}`)

  //When we compare two variables, we compare the reference and not the actual object
  console.log(`value of x.val2 is ${x.val2}`)
  console.log(`value of y.val2 is ${y.val2}`)

  //!Creating a copy of the object
    //We use a spread operator to create a copy of the object
  const z = {...x}
  console.log(`value of x.val2 is ${x.val2}`)
  console.log(`value of z.val2 is ${z.val2}`)
  //! Despite the fact x and z objects have diffrent values, they will not be refered as the seme, as we have created new object in memory.
    // !Shallow checks does not check the content of the object, it only checks the reference of the object in the memory
      //!this is the same way react checks dependencies in useEffect hook.
      //Base types are however safe to use
  
      //It is important to keep this in mind. We should always use the operators that change the state variable and not modify the state directly. 
        //When we use the setter for state everytime it firest the reference of the object will differ everytime, and will fire the hook.
        //If we modify the old object, or set reference to the objec it will NOT fire
  console.log(` equation x===z, after z = {...x} is:  ${x === z}`)

  return(
    null
  )
}

export default App;

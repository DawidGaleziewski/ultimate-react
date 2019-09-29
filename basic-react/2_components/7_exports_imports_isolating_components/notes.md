#export components
*this is es6 feature and is not fully supported yet in all browsers. This is why we need webpack

    *we want React.render() to be called only once when we run the application. We need to bootstrap the js code
        *one of those resons is that everytime we re-render the application we lose all state of the application

    *by convention the file that will be bootstraping all js is called App.js

    *root component of our application, ie App.js, have no props

    * single modular .js file

    * we need to always import the react before using any jsx
    import React from 'react';

    * We can now create our function that will be returning our view:
    const App = ()=>  <p>Test</p>;

    * Convention in react to export the file as default component of the app:
    export default <module name>

    * after that we need to import the module in the root:
    import App from './App'


========learn more on JS=====
Learn more about pure JavaScript modules
export default <exportName>
import React from 'react';
import Home from './Home';
import About from './About';
// Named export of react router as alias for more generic use
// Also importing Route from react-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// SPA can have multiple views we can navigate to.
// Navigation can be done by url as well
// router handles this in react
// There are multiple routers for react one of them is react-router
// npm install react-router-dom --save

// Views we navigate to are simply components

// All components that will use router will need to be wraped inside of it
// It is common to wrap whole app in the Router as below
const App = () => (
  <Router>
    <main>
      {/* Route accepts path and the component that will be rendered on it */}
      {/* If we go to /about both components will be  rendered. This is due to Router feature. Router checks for relative path, and if it matches. "/about" contains "/" therefore both components will be a match */}
      {/* To make componnets match only on exact paths we use "exact prop" */}
      {/* Router will tie the browser navigation to url. */}
      {/* Those are the palces that can be considered containers of state: 
    -component state, 
    -props, 
    -browser url*/}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </main>
  </Router>
);

export default App;

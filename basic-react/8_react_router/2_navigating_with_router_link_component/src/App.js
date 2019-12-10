import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Navigation via a tags

const App = () => (
  // Footer works also as a Fragment in this case
  <Router>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </main>
    {/* There is a problem with default a tag. The app will flicker when we navigate via link. This is due to fact that a tag by default will fetch HTMl.
    It will work when we use a tag but will re-fetch the html for the whole react application, reseting the state */}
    {/* SOlution for this is react router link component, see inside Footer for further information */}
    <Footer />
  </Router>
);

export default App;

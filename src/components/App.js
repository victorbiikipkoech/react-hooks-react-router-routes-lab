import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

//views for each route
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';

export default function App(props) {
  return (
    <div>
      <NavBar/>
      <div className="main">
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/" component={LandingPage}/>
      </div>
    </div>
  );
}

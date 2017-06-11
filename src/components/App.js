import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from '../pages/Landing';
import Tasks from '../pages/Tasks';

//I think the App component will render the different routes
// the app componenet might not be the best place to render the NavBar because this will not be the same for all views

export default function App(props) {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/tasks" component={Tasks}/>
      </Switch>
      <Footer/>
    </div>
  );
}

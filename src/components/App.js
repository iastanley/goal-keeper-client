import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Landing from './Landing';

//I think the App component will render the different routes

export default function App(props) {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
      <Footer/>
    </div>
  );
}

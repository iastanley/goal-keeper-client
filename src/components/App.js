import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';

//views for each route
import LandingPage from '../pages/LandingPage';
import TasksPage from '../pages/TasksPage';
import GoalsPage from '../pages/GoalsPage';

// I think the App component will render the different routes.
// The app componenet might not be the best place to render the NavBar
// because this will not be the same for all views

export default function App(props) {
  return (
    <div>
      <NavBar/>
      <div className="main">
        {/*<Route path="/home/goals" component={GoalsPage}/>*/}
        <Route exact path="/home" component={TasksPage}/>
        <Route exact path="/" component={LandingPage}/>
      </div>
      <Footer/>
    </div>
  );
}

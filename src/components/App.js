import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';

//views for each route
import LandingPage from '../pages/LandingPage';
import TasksPage from '../pages/TasksPage';
import GoalsPage from '../pages/GoalsPage';
import NewTaskModal from '../pages/NewTaskModal';
import NewGoalModal from '../pages/NewGoalModal';

// I think the App component will render the different routes.
// The app componenet might not be the best place to render the NavBar
// because this will not be the same for all views

export default function App(props) {
  return (
    <div>
      <NavBar/>
      <div className="main">
        <Route path="/home/goals" component={GoalsPage}/>
        <Route path="/home/newtask" component={NewTaskModal}/>
        <Route path="/home/newgoal" component={NewGoalModal}/>
        <Route exact path="/home" component={TasksPage}/>
        <Route exact path="/" component={LandingPage}/>
      </div>
      <Footer/>
    </div>
  );
}

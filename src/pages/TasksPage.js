import React from 'react';
import NavBar from '../components/NavBar';
import './TasksPage.css';

//we need to render the NavBar in this component so that the modified button can be used.

const TasksPage = (props) => {
  return (
    <div className="tasks-body">
      <NavBar rightMenu="show-goal-button"/>
      <h1>Tasks Placeholder</h1>
    </div>
  );
}

export default TasksPage;

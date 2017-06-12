import React from 'react';
import NavBar from '../components/NavBar';
import './GoalsPage.css';

const GoalsPage = (props) => {
  return(
    <div>
      <NavBar rightMenu="show-task-button"/>
      <h1>Goal Progress</h1>
    </div>
  );
}

export default GoalsPage;

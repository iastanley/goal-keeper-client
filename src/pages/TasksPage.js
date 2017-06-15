import React from 'react';
import NavBar from '../components/NavBar';
import Calendar from '../components/Calendar';
import TasksList from '../components/TasksList';
import './TasksPage.css';

//we need to render the NavBar in this component so that the modified button can be used.

const TasksPage = (props) => {
  return (
    <div>
      <div className="tasks-page">
        <Calendar />
        <TasksList />
      </div>
    </div>

  );
}

export default TasksPage;

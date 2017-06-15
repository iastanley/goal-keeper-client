import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Calendar from '../components/Calendar';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import GoalsPage from './GoalsPage';
import { toggleNewTask } from '../actions';
import './TasksPage.css';

//we need to render the NavBar in this component so that the modified button can be used.

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.openNewTask = this.openNewTask.bind(this);
    this.closeNewTask = this.closeNewTask.bind(this);
  }

  openNewTask() {
    this.props.dispatch(toggleNewTask(true));
  }

  closeNewTask() {
    this.props.dispatch(toggleNewTask(false));
  }

  render() {
    console.log(this.props.showNewTask);
    return (
      <div className="tasks-page">
        <Calendar />
        <TasksList goals={this.props.goals} openNewTask={this.openNewTask}/>
        <GoalsPage goals={this.props.goals}/>
        <NewTaskModal
          show={this.props.showNewTask}
          close={this.closeNewTask}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  goals: state.goal,
  showNewTask: state.navigation.showNewTask
});

export default connect(mapStateToProps)(TasksPage);

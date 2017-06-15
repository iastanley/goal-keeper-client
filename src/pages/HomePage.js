import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import GoalsPane from '../components/GoalsPane';
import { toggleNewTask, toggleGoalPane } from '../actions';
import './HomePage.css';

//we need to render the NavBar in this component so that the modified button can be used.

class HomePage extends Component {
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
    return (
      <div className="home-page">
        <Calendar />
        <TasksList goals={this.props.goals} openNewTask={this.openNewTask}/>
        <GoalsPane
          show={this.props.showGoalPane}
          goals={this.props.goals}/>
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
  showNewTask: state.navigation.showNewTask,
  showGoalPane: state.navigation.showGoalPane
});

export default connect(mapStateToProps)(HomePage);

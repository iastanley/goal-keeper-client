import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarContainer from '../components/CalendarContainer';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import NewGoalModal from '../components/NewGoalModal';
import GoalsPane from '../components/GoalsPane';
import { toggleNewTask, toggleNewGoal } from '../actions';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.openNewTask = this.openNewTask.bind(this);
    this.closeNewTask = this.closeNewTask.bind(this);
    this.openNewGoal = this.openNewGoal.bind(this);
    this.closeNewGoal = this.closeNewGoal.bind(this);
  }

  openNewTask() {
    this.props.dispatch(toggleNewTask(true));
  }

  closeNewTask() {
    this.props.dispatch(toggleNewTask(false));
  }

  openNewGoal() {
    this.props.dispatch(toggleNewGoal(true));
  }

  closeNewGoal() {
    this.props.dispatch(toggleNewGoal(false));
  }

  render() {
    return (
      <div className="home-page">
        <CalendarContainer goals={this.props.goals}/>
        <TasksList goals={this.props.goals} openNewTask={this.openNewTask}/>
        <GoalsPane
          show={this.props.showGoalPane}
          goals={this.props.goals}
          openNewGoal={this.openNewGoal}/>
        <NewTaskModal
          show={this.props.showNewTask}
          close={this.closeNewTask}/>
        <NewGoalModal
          show={this.props.showNewGoal}
          close={this.closeNewGoal}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  goals: state.goal,
  showNewTask: state.navigation.showNewTask,
  showNewGoal: state.navigation.showNewGoal,
  showGoalPane: state.navigation.showGoalPane
});

export default connect(mapStateToProps)(HomePage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarContainer from '../components/CalendarContainer';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import NewGoalModal from '../components/NewGoalModal';
import EditGoalModal from '../components/EditGoalModal';
import GoalsPane from '../components/GoalsPane';
import {
  toggleNewTask,
  toggleNewGoal,
  toggleEditGoal,
  setDay,
  loadGoal,
  createGoal,
  editGoal,
  createTask,
  editTask
 } from '../actions';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.openNewTask = this.openNewTask.bind(this);
    this.closeNewTask = this.closeNewTask.bind(this);
    this.openNewGoal = this.openNewGoal.bind(this);
    this.closeNewGoal = this.closeNewGoal.bind(this);
    this.openEditGoal = this.openEditGoal.bind(this);
    this.closeEditGoal = this.closeEditGoal.bind(this);
    this.setDay = this.setDay.bind(this);
    this.createGoal = this.createGoal.bind(this);
    this.createTask = this.createTask.bind(this);
    this.editGoal = this.editGoal.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  // REACTIVATE ONCE CLIENT SIDE STYLING IS FINISHED
  componentDidMount() {
    if (localStorage.userToken) {
      this.props.dispatch(loadGoal(this.props.user));
    } else {
      console.log('Bad login');
    }
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

  openEditGoal(editGoalId) {
    this.props.dispatch(toggleEditGoal(true, editGoalId));
  }

  closeEditGoal() {
    this.props.dispatch(toggleEditGoal(false, null));
  }

  setDay(day) {
    this.props.dispatch(setDay(day));
  }

  createGoal(newGoal) {
    this.props.dispatch(createGoal(newGoal));
  }

  createTask(goalId, newTask) {
    this.props.dispatch(createTask(goalId, newTask));
  }

  editGoal(editGoalId, update) {
    this.props.dispatch(editGoal(editGoalId, update));
  }

  editTask(update) {
    this.props.dispatch(editTask(update));
  }

  render() {
    return (
      <div className="home-page">
        <CalendarContainer
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          setDay={this.setDay}
          editTask={this.editTask}/>
        <TasksList
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          openNewTask={this.openNewTask}
          editTask={this.editTask}/>
        <GoalsPane
          show={this.props.showGoalPane}
          goals={this.props.goals}
          openNewGoal={this.openNewGoal}
          openEditGoal={this.openEditGoal}/>
        <NewTaskModal
          goals={this.props.goals}
          date={this.props.selectedDay}
          show={this.props.showNewTask}
          close={this.closeNewTask}
          createTask={this.createTask}/>
        <NewGoalModal
          user={this.props.user}
          show={this.props.showNewGoal}
          close={this.closeNewGoal}
          createGoal={this.createGoal}/>
        <EditGoalModal
          goal={this.props.goals[this.props.editGoalId]}
          show={this.props.showEditGoal}
          close={this.closeEditGoal}
          editGoal={this.editGoal}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  goals: state.goal.goalList,
  selectedDay: state.selectedDay,
  showNewTask: state.navigation.showNewTask,
  showNewGoal: state.navigation.showNewGoal,
  showEditGoal: state.navigation.showEditGoal.show,
  editGoalId: state.navigation.showEditGoal.goalId,
  showGoalPane: state.navigation.showGoalPane,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(HomePage);

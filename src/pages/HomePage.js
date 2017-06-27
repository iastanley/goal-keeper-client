import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarContainer from '../components/CalendarContainer';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import NewGoalModal from '../components/NewGoalModal';
import EditGoalModal from '../components/EditGoalModal';
import GoalsPane from '../components/GoalsPane';
import {
  toggleLogin,
  toggleSignUp,
  toggleNewTask,
  toggleNewGoal,
  toggleEditGoal,
  setDay,
  loadGoal,
  createGoal,
  editGoal,
  createTask,
  editTask,
  deleteGoal,
  deleteTask,
  setGoalError
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
    this.deleteGoal = this.deleteGoal.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setGoalError = this.setGoalError.bind(this);
  }

  // REACTIVATE ONCE CLIENT SIDE STYLING IS FINISHED
  componentDidMount() {
    if (localStorage.userToken) {
      this.props.dispatch(loadGoal(this.props.user));
      this.props.dispatch(toggleLogin(false));
      this.props.dispatch(toggleSignUp(false));
    } else {
      console.log('Bad login');
    }
  }

  openNewTask() {
    this.props.dispatch(toggleNewTask(true));
  }

  closeNewTask() {
    this.props.dispatch(toggleNewTask(false));
    this.props.dispatch(setGoalError(null));
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

  deleteGoal(goalId) {
    this.props.dispatch(deleteGoal(goalId));
  }

  deleteTask(goalId, taskId) {
    this.props.dispatch(deleteTask(goalId, taskId));
  }

  setGoalError(goalError) {
    console.log(goalError);
    this.props.dispatch(setGoalError(goalError));
  }

  render() {
    return (
      <div className="home-page">
        <CalendarContainer
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          setDay={this.setDay}
          editTask={this.editTask}
          deleteTask={this.deleteTask}/>
        <TasksList
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          openNewTask={this.openNewTask}
          editTask={this.editTask}
          deleteTask={this.deleteTask}/>
        <GoalsPane
          show={this.props.showGoalPane}
          goals={this.props.goals}
          openNewGoal={this.openNewGoal}
          openEditGoal={this.openEditGoal}/>
        <NewTaskModal
          goals={this.props.goals}
          date={this.props.selectedDay}
          show={this.props.showNewTask}
          isLoading={this.props.isLoading}
          goalError={this.props.goalError}
          close={this.closeNewTask}
          createTask={this.createTask}
          setGoalError={this.setGoalError}/>
        <NewGoalModal
          user={this.props.user}
          show={this.props.showNewGoal}
          close={this.closeNewGoal}
          createGoal={this.createGoal}/>
        <EditGoalModal
          goal={this.props.goals[this.props.editGoalId]}
          show={this.props.showEditGoal}
          close={this.closeEditGoal}
          editGoal={this.editGoal}
          deleteGoal={this.deleteGoal}/>
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
  loggedIn: state.user.loggedIn,
  isLoading: state.goal.isLoading,
  goalError: state.goal.goalError
});

export default connect(mapStateToProps)(HomePage);

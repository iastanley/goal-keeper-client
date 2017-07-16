import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CalendarContainer from '../components/CalendarContainer';
import TasksList from '../components/TasksList';
import NewTaskModal from '../components/NewTaskModal';
import NewGoalModal from '../components/NewGoalModal';
import EditGoalModal from '../components/EditGoalModal';
import GoalsPane from '../components/GoalsPane';
import InstructionsBanner from '../components/InstructionsBanner';
import LoadingOverlay from '../components/LoadingOverlay';
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

export class HomePage extends Component {
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

  // loads data if user refreshes home page
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.dispatch(loadGoal(this.props.user));
      this.props.dispatch(toggleLogin(false));
      this.props.dispatch(toggleSignUp(false));
    }
  }

  // loads data on first login from landingPage
  componentDidUpdate(prevProps, prevState) {
    if ((this.props.loggedIn !== prevProps.loggedIn) &&
        this.props.loggedIn) {
      this.props.dispatch(loadGoal(this.props.user));
      this.props.dispatch(toggleLogin(false));
      this.props.dispatch(toggleSignUp(false));
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
    this.props.dispatch(setGoalError(null));
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
    if (this.props.badCredentials) {
      return (
        <Redirect to="/" />
      )
    }

    let goalToEdit;
    if (this.props.editGoalId) {
      goalToEdit = this.props.goals[this.props.editGoalId];
    }
    return (
      <div className="home-page">
        <LoadingOverlay isLoading={this.props.userIsLoading || this.props.goalIsLoading}/>
        <InstructionsBanner/>
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
          isLoading={this.props.goalIsLoading}
          goalError={this.props.goalError}
          close={this.closeNewTask}
          createTask={this.createTask}
          setGoalError={this.setGoalError}/>
        <NewGoalModal
          user={this.props.user}
          show={this.props.showNewGoal}
          isLoading={this.props.goalIsLoading}
          goalError={this.props.goalError}
          close={this.closeNewGoal}
          createGoal={this.createGoal}
          setGoalError={this.setGoalError}/>
        <EditGoalModal
          goal={goalToEdit}
          show={this.props.showEditGoal}
          isLoading={this.props.goalIsLoading}
          goalError={this.props.goalError}
          close={this.closeEditGoal}
          editGoal={this.editGoal}
          deleteGoal={this.deleteGoal}
          setGoalError={this.setGoalError}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userError: state.user.userError,
  badCredentials: state.user.badCredentials,
  userIsLoading: state.user.isLoading,
  loggedIn: state.user.loggedIn,
  selectedDay: state.selectedDay,
  showNewTask: state.navigation.showNewTask,
  showNewGoal: state.navigation.showNewGoal,
  showEditGoal: state.navigation.showEditGoal.show,
  editGoalId: state.navigation.showEditGoal.goalId,
  showGoalPane: state.navigation.showGoalPane,
  goals: state.goal.goalList,
  goalIsLoading: state.goal.isLoading,
  goalError: state.goal.goalError
});

export default connect(mapStateToProps)(HomePage);

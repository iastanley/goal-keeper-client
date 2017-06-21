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
  loadGoal } from '../actions';
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
  }

  // REACTIVATE ONCE CLIENT SIDE STYLING IS FINISHED
  // componentDidMount() {
  //   this.props.dispatch(loadGoal(this.props.user));
  // }

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

  render() {
    return (
      <div className="home-page">
        <CalendarContainer
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          setDay={this.setDay}/>
        <TasksList
          goals={this.props.goals}
          selectedDay={this.props.selectedDay}
          openNewTask={this.openNewTask}/>
        <GoalsPane
          show={this.props.showGoalPane}
          goals={this.props.goals}
          openNewGoal={this.openNewGoal}
          openEditGoal={this.openEditGoal}/>
        <NewTaskModal
          goals={this.props.goals}
          show={this.props.showNewTask}
          close={this.closeNewTask}/>
        <NewGoalModal
          show={this.props.showNewGoal}
          close={this.closeNewGoal}/>
        <EditGoalModal
          goal={this.props.goals[this.props.editGoalId]}
          show={this.props.showEditGoal}
          close={this.closeEditGoal}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  goals: state.goal.goalList,
  selectedDay: state.selectedDay,
  showNewTask: state.navigation.showNewTask,
  showNewGoal: state.navigation.showNewGoal,
  showEditGoal: state.navigation.showEditGoal.show,
  editGoalId: state.navigation.showEditGoal.goalId,
  showGoalPane: state.navigation.showGoalPane
});

export default connect(mapStateToProps)(HomePage);

import React, { Component } from 'react';
import _ from 'lodash';
import GoalListItem from './GoalListItem';
import './TasksList.css';

// This could be a functional component
class TasksList extends Component {
  buildGoalList() {
    return _.map(this.props.goals, (goal) => {
      return (
        <GoalListItem key={goal._id} goal={goal}/>
      );
    });
  }

  render() {
    return (
      <div className="tasks-list">
        <div className="goal-list">
          {this.buildGoalList()}
        </div>
        <button
          className="btn btn-primary btn-new-task"
          onClick={this.props.openNewTask}>
          New Task
        </button>
      </div>
    );
  }
}

export default TasksList;

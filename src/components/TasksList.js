import React, { Component } from 'react';
import _ from 'lodash';
import GoalListItem from './GoalListItem';
import './TasksList.css';

// This could be a functional component
class TasksList extends Component {
  buildGoalList() {
    return _.map(this.props.goals, (goal) => {
      return (
        <GoalListItem
          key={goal._id}
          goal={goal}
          selectedDay={this.props.selectedDay}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}/>
      );
    });
  }

  render() {
    return (
      <div className="tasks-list">
        <div className="goal-list">
          <div className="empty-goal-list">
            <h3>View Tasks Here</h3>
          </div>
          {this.buildGoalList()}
        </div>
        <div className="btn-container">
          <button
            className="btn btn-custom btn-new-task"
            onClick={this.props.openNewTask}>
            New Task
          </button>
        </div>
      </div>
    );
  }
}

export default TasksList;

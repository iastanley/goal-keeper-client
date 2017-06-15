import React, { Component } from 'react';
import _ from 'lodash';
import './TasksList.css';

class TasksList extends Component {
  buildGoalList() {
    return _.map(this.props.goals, (goal) => {
      return (
        <div
          className="goal-item"
          key={goal.id}>
          <h3>{goal.title}</h3>
          <ul>
            {this.buildTaskList(goal.tasks, goal.color)}
          </ul>
        </div>
      );
    });
  }

  // the input field will need to be a controlled component with onChange callback
  buildTaskList(taskList, color) {
    return taskList.map(task => {
      return (
          <li className="task-list-item"
          style={{border: '2px solid' + color}}
          key={task.id}>
            <input type="checkbox"/>
            <input type="text" value={task.name}/>
            <i className="fa fa-lg fa-times" aria-hidden="true"></i>
          </li>
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

import React, { Component } from 'react';
import _ from 'lodash';

class TasksList extends Component {
  buildGoalList() {
    return _.map(this.props.goals, (goal) => {
      return (
        <div className="goal-item" key={goal.id}>
          <h3>{goal.title}</h3>
          <ul>
            {this.buildTaskList(goal.tasks)}
          </ul>
        </div>
      );
    });
  }

  buildTaskList(taskList) {
    return taskList.map(task => {
      return (
          <li key={task.id}>{task.name}</li>
      );
    });
  }

  render() {
    return (
      <div className="tasks-list">
        <h1>Task List</h1>
        {this.buildGoalList()}
      </div>
    );
  }
}

TasksList.defaultProps = {
  goals: {
    1: {
      id: 1,
      title: 'Learn',
      color: '#f00',
      tasks: [
        {
          id: 10,
          name: 'Do this first',
          complete: true
        },
        {
          id: 11,
          name: 'Do this second',
          complete: false
        }
      ]
    }, // end of goal id: 1
    2: {
      id: 2,
      title: 'Marathon',
      color: '#f0f',
      tasks: [
        {
          id: 12,
          name: 'Do this first',
          complete: true
        },
        {
          id: 13,
          name: 'Do this second',
          complete: false
        }
      ]
    }, // end of goal id: 2
  }
}

export default TasksList;

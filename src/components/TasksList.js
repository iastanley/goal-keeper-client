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
        <button className="btn btn-primary btn-new-task">New Task</button>
      </div>
    );
  }
}

TasksList.defaultProps = {
  goals: {
    1: {
      id: 1,
      title: 'Goal 1',
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
      title: 'Goal 2',
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
    3: {
      id: 3,
      title: 'Goal 3',
      color: '#0f0',
      tasks: [
        {
          id: 14,
          name: 'Do this first',
          complete: true
        },
        {
          id: 15,
          name: 'Do this second',
          complete: false
        }
      ]
    }, // end of goal id: 2
  }
}

export default TasksList;

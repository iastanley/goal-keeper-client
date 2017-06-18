import React, { Component } from 'react';

class TaskListItem extends Component {
  render() {
    return (
      <li
        className="task-list-item"
        style={{border: '2px solid' + this.props.color}}>
        <input checked={this.props.task.completed} type="checkbox"/>
        <input type="text" value={this.props.task.name}/>
        <i className="fa fa-lg fa-times" aria-hidden="true"></i>
      </li>
    );
  }
}

export default TaskListItem;

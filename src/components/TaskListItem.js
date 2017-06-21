import React, { Component } from 'react';
import _ from 'lodash';

class TaskListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.task.completed,
      name: this.props.task.name,
      date: this.props.task.date
    }
  }
  // update should be an object of form { stateProperty: value }
  handleChange(update) {
    this.setState(update);
    update.goalId = this.props.goalId;
    update.taskId = this.props.task._id;
    this.props.editTask(update);
  }

  handleInputChange(name) {
    this.setState({ name });
    const update = {
      name: name,
      goalId: this.props.goalId,
      taskId: this.props.task._id
    }
    this.props.editTask(update);
  }

  render() {
    //to prevent input changes from firing every time a key is pressed
    const handleInputChange = _.debounce(name => this.handleInputChange(name), 300);

    return (
      <li
        className="task-list-item"
        style={{border: '2px solid' + this.props.color}}>
        <input
          onChange={event => this.handleChange({completed: event.target.checked})}
          checked={this.state.completed}
          type="checkbox"/>
        <input
          type="text"
          onChange={event => this.handleInputChange(event.target.value)}
          value={this.state.name}/>
        <i className="fa fa-lg fa-times" aria-hidden="true"></i>
      </li>
    );
  }
}

export default TaskListItem;

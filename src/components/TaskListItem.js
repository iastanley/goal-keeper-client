import React, { Component } from 'react';

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

  handleDelete() {
    this.props.deleteTask(this.props.goalId, this.props.task._id);
  }

  handleDragStart(event) {
    console.log('drag started');
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.setData('goalId', this.props.goalId);
    event.dataTransfer.setData('taskId', this.props.task._id);
    event.dataTransfer.dropEffect = "move";
  }

  // handleDragEnd(event) {
  //   console.log('drag ended')
  //   if (event.target.parentNode) {
  //     console.log('drag end if statement entered');
  //     event.target.parentNode.removeChild(event.target);
  //   }
  // }

  render() {
    return (
      <li
        id={this.props.task._id}
        className="task-list-item"
        draggable="true"
        onDragStart={(e)=>this.handleDragStart(e)}
        style={{border: '2px solid' + this.props.color}}>
        <input
          onChange={event => this.handleChange({completed: event.target.checked})}
          checked={this.state.completed}
          type="checkbox"/>
        <input
          type="text"
          onChange={event => this.handleInputChange(event.target.value)}
          value={this.state.name}/>
        <i onClick={() => this.handleDelete()}
          className="fa fa-lg fa-times"
          aria-hidden="true"></i>
      </li>
    );
  }
}

export default TaskListItem;

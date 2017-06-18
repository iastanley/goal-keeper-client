import React, { Component } from 'react';

class TaskListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.task.completed,
      text: this.props.task.name
    }
  }

  onCheckChange(checked) {
    this.setState({ checked })
  }

  onInputChange(text) {
    this.setState({text});
  }

  render() {
    return (
      <li
        className="task-list-item"
        style={{border: '2px solid' + this.props.color}}>
        <input
          onChange={event => this.onCheckChange(event.target.checked)}
          checked={this.state.checked}
          type="checkbox"/>
        <input
          type="text"
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.text}/>
        <i className="fa fa-lg fa-times" aria-hidden="true"></i>
      </li>
    );
  }
}

export default TaskListItem;

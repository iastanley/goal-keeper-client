import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import Calendar from './Calendar/Calendar';
import TaskListItem from './TaskListItem';
import './CalendarContainer.css';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    }
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  renderDay(date) {
    const taskList = [];

    // loop through all goals
    _.forIn(this.props.goals, (goal) => {
      goal.tasks.forEach(task => {
        if (date.isSame(task.date, 'day')) {
          taskList.push(
            <TaskListItem
              key={task._id}
              task={task}
              goalId={goal._id}
              color={goal.color}
              editTask={this.props.editTask}
              deleteTask={this.props.deleteTask}
            />
          );
        }
      })
    });

    return (
      <div className="day-content">
        <span
          style={{
            color: date.isSame(this.props.selectedDay, 'day') ? '#f00' : 'inherit'
            }}>
          {date.format('D')}
        </span>
        <ul>
        { taskList }
        </ul>
      </div>
    );
  } // end of renderDay method

  handleDrop(event, date) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const goalId = event.dataTransfer.getData('goalId');
    const taskId = event.dataTransfer.getData('taskId');
    console.log(`goalId: ${goalId}, taskId: ${taskId}, date: ${date} `);
    // event.target.querySelector('ul').appendChild(document.getElementById(data));
    this.props.editTask({
      date: date,
      goalId: goalId,
      taskId: taskId
    });
  }

  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  render() {
    return (
      <div id="calendar">
        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          selectedDay={this.props.selectedDay}
          onPickDate={date => this.props.setDay(date)}
          renderDay={date => this.renderDay(date)}
          handleDrop={this.handleDrop}
          handleDragOver={this.handleDragOver}
        />
      </div>

    );
  }
}

export default CalendarContainer;

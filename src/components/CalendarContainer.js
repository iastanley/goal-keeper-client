import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import Calendar from './Calendar/Calendar';
import TaskListItem from './TaskListItem';
import './CalendarContainer.css';


// this will almost certainly eventually be a class component
// and connected to store

class CalendarContainer extends Component {
  state = {
    date: moment()
  };

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
  }

  render() {
    return (
      <div id="calendar">
        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          onPickDate={date => this.props.setDay(date)}
          renderDay={date => this.renderDay(date)}
        />
      </div>

    );
  }
}

export default CalendarContainer;

import React, { Component } from 'react';
import Calendar from './Calendar/Calendar';
import moment from 'moment';

// this will almost certainly eventually be a class component
// and connected to store

class CalendarContainer extends Component {
  state = {
    date: moment()
  };

  renderDay(date) {
    const taskList = [];

    // loop through all goals
    // loop through all tasks for each goal
    // push to taskList
    // only show task-list-items in day-content on desktop

    return (
      <div className="day-content">
        <span
          style={{
            color: date.isSame(moment(), 'day') ? '#f00' : 'inherit'
            }}>
          {date.format('D')}
        </span>
        { taskList }
      </div>
    );
  }

  render() {
    return (
      <div id="calendar">
        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          onPickDate={date => console.log(date)}
          renderDay={date => this.renderDay(date)}
        />
      </div>

    );
  }
}

export default CalendarContainer;

import React, { Component } from 'react';
import Calendar from './Calendar/Calendar';
import moment from 'moment';

// this will almost certainly eventually be a class component
// and connected to store

class CalendarContainer extends Component {
  state = {
    date: moment()
  };

  render() {
    return (
      <div id="calendar">
        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          onPickDate={date => console.log(date)}
          renderDay={date => (
            <span
              style={{
                fontWeight: date.isSame(moment(), 'day') ? 700 : 400
              }}
            >
              {date.format('D')}
            </span>
          )}
        />
      </div>

    );
  }
}

export default CalendarContainer;

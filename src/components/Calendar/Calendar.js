import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createDateObjects from './createDateObjects';
import WeekDayNames from './WeekDayNames';
import './Calendar.css';


export default class Calendar extends Component {
  static propTypes = {
    /** Week offset*/
    weekOffset: PropTypes.number.isRequired,
    /** The current date as a moment objecct */
    date: PropTypes.object.isRequired,
    /** Function to render a day cell */
    renderDay: PropTypes.func,
    /** Called on next month click */
    onNextMonth: PropTypes.func,
    /** Called on prev month click */
    onPrevMonth: PropTypes.func,
    /** Called when some of the navigation controls are clicked */
    onChangeMonth: PropTypes.func,
    /** Called when a date is clicked */
    onPickDate: PropTypes.func
  };

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D')
  };

  handleNextMonth = () => {
    if (this.props.onNextMonth) {
      return this.props.onNextMonth();
    }

    this.props.onChangeMonth(this.props.date.clone().add(1, 'months'));
  };

  handlePrevMonth = () => {
    if (this.props.onPrevMonth) {
      return this.props.onPrevMonth();
    }

    this.props.onChangeMonth(this.props.date.clone().subtract(1, 'months'));
  };

  render() {
    const {
      date,
      weekOffset,
      renderDay,
      // eslint-disable-next-line
      onNextMonth,
      // eslint-disable-next-line
      onPrevMonth,
      onPickDate,
      // eslint-disable-next-line
      onChange,
      handleDragOver,
      handleDrop,
      selectedDay
    } = this.props;

    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <button onClick={this.handlePrevMonth}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <div className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </div>
          <button onClick={this.handleNextMonth}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <WeekDayNames />
        <div className="Calendar-grid">
          {createDateObjects(date, weekOffset).map((day, i) => (
            <div
              key={`day-${i}`}
              style={{ backgroundColor: day.day.isSame(selectedDay, 'day') ? '#f1f1f1' : '#fff'}}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              onClick={e => onPickDate(day.day)}
              onDrop={e => handleDrop(e, day.day)}
              onDragOver={e => handleDragOver(e)}
            >
              {renderDay(day.day)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

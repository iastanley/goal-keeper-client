import React from 'react';
import './WeekDayNames.css';

const WeekDayNames = props => {
  return (
    <div className="week-day-names">
      <div className="day-name"><span>Sun</span></div>
      <div className="day-name"><span>Mon</span></div>
      <div className="day-name"><span>Tue</span></div>
      <div className="day-name"><span>Wed</span></div>
      <div className="day-name"><span>Thu</span></div>
      <div className="day-name"><span>Fri</span></div>
      <div className="day-name"><span>Sat</span></div>
    </div>
  );
}

export default WeekDayNames;

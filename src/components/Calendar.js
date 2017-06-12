import React, { Component } from 'react';
import './Calendar.css';

// this will almost certainly eventually be a class component
// and connected to store

const Calendar = (props) => {
  return (
    <div className="calendar">
      <h2>
        <span id="back-month"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></span>
        January
        <span id="forward-month"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
      </h2>
      <h2>[Calendar Placeholder]</h2>
    </div>
  );
}

export default Calendar;

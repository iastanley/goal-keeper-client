import React, { Component } from 'react';
import _ from 'lodash';
import NavBar from '../components/NavBar';
import './GoalsPage.css';

class GoalsPage extends Component {
  // consider making each goal-progress-item a separate component
  buildGoalProgressList() {
    return _.map(this.props.goals, (goal) => {
      let taskTotal = goal.tasks.length;
      let numComplete = 0;
      for (let i = 0; i < taskTotal; i++) {
        if (goal.tasks[i].complete) {
          numComplete += 1;
        }
      }
      let percentage = numComplete / taskTotal * 100;
      return (
        <div className="goal-progress-item" key={goal.id}>
          <h3>
            <span
              className="goal-color-picker"
              style={{backgroundColor: goal.color}}>
            </span>
            {goal.title}
            <span className="delete-goal">
              <i className="fa fa-lg fa-times" aria-hidden="true"></i>
            </span>
          </h3>
          <div className="goal-progress-bar">
            <div className="progress" style={{width: percentage +'%', backgroundColor: goal.color}}></div>
          </div>
          <p>{percentage}% Done ({numComplete}/{taskTotal})</p>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="goals-page">
        <h2>Goal Progress</h2>
        <div className="goal-progress-list">
          {this.buildGoalProgressList()}
        </div>
        <button className="btn btn-primary btn-new-goal">New Goal</button>
      </div>
    );
  }
}

export default GoalsPage;

import React from 'react';
import _ from 'lodash';
import GoalProgressItem from './GoalProgressItem';
import './GoalsPane.css';

const GoalsPane = props => {
  const goalProgressList = _.map(props.goals, goal => {
    return (
      <GoalProgressItem key={goal._id} goal={goal} onEdit={props.openEditGoal}/>
    );
  });

  const componentClasses = ['goals-pane'];
  if (props.show) {
    componentClasses.push('show-pane');
  }

  return (
    <div className={componentClasses.join(' ')}>
      <h2>Goal Progress</h2>
      <div className="goal-progress-list">
        {goalProgressList}
      </div>
      <button
        className="btn btn-custom btn-new-goal"
        onClick={props.openNewGoal}>
        New Goal
      </button>
    </div>
  );
}

export default GoalsPane;

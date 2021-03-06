import React from 'react';

const GoalProgressItem = props => {
  let taskTotal = props.goal.tasks.length;
  let numComplete = 0;
  for (let i = 0; i < taskTotal; i++) {
    if (props.goal.tasks[i].completed) {
      numComplete++;
    }
  }
  let percentage = 0;
  // handle 0/0 situation
  if (taskTotal > 0) {
    percentage = Math.round(numComplete / taskTotal * 100);
  }


  return (
    <div className="goal-progress-item">
      <h3>
        {props.goal.title}
        <span
          onClick={event => props.onEdit(props.goal._id)}
          className="edit-goal">EDIT</span>
      </h3>
      <div className="goal-progress-bar">
        <div className="progress" style={{width: percentage +'%', backgroundColor: props.goal.color}}></div>
      </div>
      <p>{percentage}% Done ({numComplete}/{taskTotal})</p>
    </div>
  );
}

export default GoalProgressItem;

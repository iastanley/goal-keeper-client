import React from 'react';
import TaskListItem from './TaskListItem';

const GoalListItem = (props) => {
  const taskList = props.goal.tasks.map(task => {
    return (
      <TaskListItem
        key={task._id}
        task={task}
        color={props.goal.color}
      />
    );
  });

  return (
    <div className="goal-list-item">
      <h3>{props.goal.title}</h3>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

export default GoalListItem;

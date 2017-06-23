import React from 'react';
import TaskListItem from './TaskListItem';

const GoalListItem = props => {
  const taskList = [];
  props.goal.tasks.forEach(task => {
    if (props.selectedDay.isSame(task.date, 'day')) {
      taskList.push(
        <TaskListItem
          key={task._id}
          task={task}
          goalId={props.goal._id}
          color={props.goal.color}
          editTask={props.editTask}
          deleteTask={props.deleteTask}
          />
      );
    }
  });

  if (taskList.length) {
    return (
      <div className="goal-list-item">
        <h3>{props.goal.title}</h3>
        <ul>
          {taskList}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default GoalListItem;

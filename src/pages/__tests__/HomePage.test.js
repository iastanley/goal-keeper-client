import React from 'react';
import { shallow, mount } from 'enzyme';

import { HomePage } from '../HomePage';
import {
  toggleLogin,
  toggleSignUp,
  toggleNewTask,
  toggleNewGoal,
  toggleEditGoal,
  setDay,
  loadGoal,
  createGoal,
  editGoal,
  createTask,
  editTask,
  deleteGoal,
  deleteTask,
  setGoalError
} from '../../actions';

describe('HomePage', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.hasClass('home-page')).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<HomePage/>);
    expect(wrapper.find('CalendarContainer')).toHaveLength(1);
    expect(wrapper.find('TasksList')).toHaveLength(1);
    expect(wrapper.find('GoalsPane')).toHaveLength(1);
    expect(wrapper.find('NewTaskModal')).toHaveLength(1);
    expect(wrapper.find('NewGoalModal')).toHaveLength(1);
    expect(wrapper.find('EditGoalModal')).toHaveLength(1);
  });

  
});

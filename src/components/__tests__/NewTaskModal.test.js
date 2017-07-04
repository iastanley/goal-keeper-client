import React from 'react';
import { shallow, mount } from 'enzyme';

import NewTaskModal from '../NewTaskModal';

describe('NewTaskModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<NewTaskModal/>);
    expect(wrapper.hasClass('new-task-modal')).toBe(true);
  });

  it('should update state on task name input change', () => {
    const wrapper = shallow(<NewTaskModal/>);
    const simEvent = {
      target: {
        value: 'new task name'
      }
    }
    wrapper.find('input').simulate('change', simEvent);
    expect(wrapper.state('name')).toEqual(simEvent.target.value);
  });

  it('should update state on select goal change', () => {
    const wrapper = shallow(<NewTaskModal/>);
    const simEvent = {
      target: {
        value: 'goalId'
      }
    }
    wrapper.find('select').simulate('change', simEvent);
    expect(wrapper.state('goalId')).toEqual(simEvent.target.value);
  });

  it('should call createTask on save', () => {
    const createTask = jest.fn();
    const closeNewTask = jest.fn();
    const testTaskName = 'test task name';
    const testGoalId = '111';
    const testDate = '2017-06-01';
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <NewTaskModal
        createTask={createTask}
        close={closeNewTask}
        date={testDate}/>
    );
    wrapper.setState({
      name: testTaskName,
      goalId: testGoalId
    });
    wrapper.find('.save-btn').simulate('click', simEvent);
    expect(createTask).toHaveBeenCalledTimes(1);
    expect(createTask).toHaveBeenCalledWith(testGoalId, {
      name: testTaskName,
      date: testDate
    });
    expect(closeNewTask).toHaveBeenCalledTimes(1);
  });

  it('should set goal error on missing input', () => {
    const setGoalError = jest.fn();
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <NewTaskModal setGoalError={setGoalError}/>
    );
    wrapper.setState({
      name: ''
    });
    wrapper.find('.save-btn').simulate('click', simEvent);
    expect(setGoalError).toHaveBeenCalledTimes(1);
    expect(setGoalError).toHaveBeenCalledWith('Please provide a task name.');
  });

  it('should call closeNewTask on Cancel button click', () => {
    const closeNewTask = jest.fn();
    const wrapper = shallow(
      <NewTaskModal close={closeNewTask}/>
    );
    wrapper.find('.cancel-btn').simulate('click');
    expect(closeNewTask).toHaveBeenCalledTimes(1);
  });
});

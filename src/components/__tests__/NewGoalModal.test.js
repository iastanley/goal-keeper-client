import React from 'react';
import { shallow, mount } from 'enzyme';

import NewGoalModal from '../NewGoalModal';

describe('NewGoalModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<NewGoalModal/>);
    expect(wrapper.hasClass('new-goal-modal')).toBe(true);
  });

  it('should update state on goal title input change', () => {
    const wrapper = shallow(<NewGoalModal/>);
    const simEvent = {
      target: {
        value: 'new goal title'
      }
    }
    wrapper.find('input').simulate('change', simEvent);
    expect(wrapper.state('title')).toEqual(simEvent.target.value);
  });

  it('should update state on colorpicker change', () => {
    const wrapper = shallow(<NewGoalModal/>);
    const testColor = {
      hex: '#000'
    }
    //simulate picking color from ColorPicker
    wrapper.instance().handleColorChange(testColor);
    expect(wrapper.state('color')).toEqual(testColor.hex);
  });

  it('should call createGoal on Save button click', () => {
    const createGoal = jest.fn();
    const closeNewGoal = jest.fn();
    const goalTitle = 'new goal title';
    const goalColor = '#000';
    const testUser = 'testUser';
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <NewGoalModal
        user={testUser}
        createGoal={createGoal}
        close={closeNewGoal}/>
    );
    wrapper.setState({
      title: goalTitle,
      color: goalColor
    });
    wrapper.find('.save-btn').simulate('click', simEvent);
    expect(createGoal).toHaveBeenCalledTimes(1);
    expect(createGoal).toHaveBeenCalledWith({
      user: testUser,
      title: goalTitle,
      color: goalColor
    });
    expect(closeNewGoal).toHaveBeenCalledTimes(1);
  });

  it('should set error if field is empty', () => {
    const setGoalError = jest.fn();
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <NewGoalModal setGoalError={setGoalError}/>
    );
    wrapper.setState({
      title: '',
      color: ''
    });
    wrapper.find('.save-btn').simulate('click', simEvent);
    expect(setGoalError).toHaveBeenCalledTimes(1)
  });

  it('should call closeNewGoal on Cancel button click', () => {
    const closeNewGoal = jest.fn();
    const wrapper = shallow(
      <NewGoalModal close={closeNewGoal}/>
    );
    wrapper.find('.cancel-btn').simulate('click');
    expect(closeNewGoal).toHaveBeenCalledTimes(1);
  })
});

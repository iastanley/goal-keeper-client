import React from 'react';
import { shallow, mount } from 'enzyme';

import EditGoalModal from '../EditGoalModal';

describe('EditGoalModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<EditGoalModal/>);
    expect(wrapper.hasClass('edit-goal-modal')).toBe(true);
  });

  it('should render with initial state from goal', () => {
    const goalToEdit =     {
          _id: 1,
          title: 'Goal 1',
          color: '#e91e63',
          tasks: [
            {
              _id: 10,
              name: 'Do this first',
              completed: true,
              date: '2017-07-02'
            },
            {
              _id: 11,
              name: 'Do this second',
              completed: false,
              date: '2017-06-01'
            }
          ]
        }
    const wrapper = mount(
      <EditGoalModal
      goal={null}
      show={true}
      isLoading={false}
      goalError={null}
      close={jest.fn()}
      editGoal={jest.fn()}
      deleteGoal={jest.fn()}
      setGoalError={jest.fn()}
      />
    );

    wrapper.setProps({
      goal: goalToEdit
    });

    expect(wrapper.state('color')).toEqual(goalToEdit.color);
    expect(wrapper.state('title')).toEqual(goalToEdit.title);
  });
});

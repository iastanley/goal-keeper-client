import React from 'react';
import { shallow, mount } from 'enzyme';

import EditGoalModal from '../EditGoalModal';

describe('EditGoalModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<EditGoalModal/>);
    expect(wrapper.hasClass('edit-goal-modal')).toBe(true);
  });
});

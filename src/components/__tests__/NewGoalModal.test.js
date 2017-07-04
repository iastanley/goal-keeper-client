import React from 'react';
import { shallow, mount } from 'enzyme';

import NewGoalModal from '../NewGoalModal';

describe('NewGoalModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<NewGoalModal/>);
    expect(wrapper.hasClass('new-goal-modal')).toBe(true);
  });
});

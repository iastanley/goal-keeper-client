import React from 'react';
import { shallow, mount } from 'enzyme';

import GoalsPane from '../GoalsPane';

describe('GoalsPane', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<GoalsPane/>);
    expect(wrapper.hasClass('goals-pane')).toBe(true);
  });

  it('should call openNewGoal on button click', () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <GoalsPane
        openNewGoal={mock}
      />);
    wrapper.find('button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

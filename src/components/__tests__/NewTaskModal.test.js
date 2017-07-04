import React from 'react';
import { shallow, mount } from 'enzyme';

import NewTaskModal from '../NewTaskModal';

describe('NewTaskModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<NewTaskModal/>);
    expect(wrapper.hasClass('new-task-modal')).toBe(true);
  });
});

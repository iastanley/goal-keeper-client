import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';
import CalendarContainer from '../CalendarContainer';

describe('CalendarContainer', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<CalendarContainer />);
    expect(wrapper.is('#calendar')).toBe(true);
  });
});

import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';
import CalendarContainer from '../CalendarContainer';

describe('CalendarContainer', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<CalendarContainer />);
    expect(wrapper.is('#calendar')).toBe(true);
  });

  it('should render child component', () => {
    const wrapper = shallow(<CalendarContainer />);
    expect(wrapper.find('Calendar')).toHaveLength(1);
  });

  
}); // end of CalendarContainer tests

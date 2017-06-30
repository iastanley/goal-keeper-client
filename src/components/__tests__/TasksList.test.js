import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';

import TasksList from '../TasksList';

describe('TasksList', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<TasksList/>);
    expect(wrapper.hasClass('tasks-list')).toBe(true);
  });

  it('should call openNewTask on button click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<TasksList openNewTask={mock}/>);
    wrapper.find('button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('should render goals', () => {
    const goals = {
      1: {
        _id: 1,
        title: 'Goal 1',
        color: '#e91e63',
        tasks: [
          {
            _id: 10,
            name: 'Do this first',
            completed: true,
            date: moment('2017-07-02')
          },
          {
            _id: 11,
            name: 'Do this second',
            completed: false,
            date: moment('2017-06-01')
          }
        ]
      }, // end of goal _id: 1
      2: {
        _id: 2,
        title: 'Goal 2',
        color: '#00bcd4',
        tasks: [
          {
            _id: 12,
            name: 'Do this first',
            completed: true,
            date: moment('2017-06-01')
          },
          {
            _id: 13,
            name: 'Do this second',
            completed: false,
            date: moment('2017-06-12')
          },
          {
            _id: 14,
            name: 'Do this second',
            completed: false,
            date: moment('2017-06-23')
          },
          {
            _id: 15,
            name: 'Do this second',
            completed: false,
            date: moment('2017-06-24')
          }

        ]
      }, // end of goal _id: 2
    }
    const selectedDay = '2017-06-12';
    const openNewTask = jest.fn();
    const wrapper = shallow(
      <TasksList
      goals={goals}
      selectedDay={selectedDay}
      openNewTask={openNewTask}/>);
    expect(wrapper.find('GoalListItem')).toHaveLength(2);
  });
});

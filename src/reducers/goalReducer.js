// for dummy store
import moment from 'moment';
import _ from 'lodash';
import { handle } from 'redux-pack';
import { LOAD_GOAL } from '../actions';

export const initialState = {
  isLoading: false,
  goalError: null,
  goalList: {
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
    3: {
      _id: 3,
      title: 'Goal 3',
      color: '#ffc107',
      tasks: [
        {
          _id: 16,
          name: 'Do this first',
          completed: true,
          date: moment('2017-06-01')
        },
        {
          _id: 17,
          name: 'Do this second',
          completed: false,
          date: moment('2017-06-12')
        }
      ]
    } // end of goal _id: 2
  }
}

export default function goalReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_GOAL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isLoading: true,
          goalError: null
        }),
        finish: prevState => ({...prevState, isLoading: false}),
        failure: prevState => ({...prevState, goalError: action.payload.data}),
        success: prevState => ({...prevState, goalList: _.mapKeys(action.payload.data, '_id')})
      });
    default:
      return state;
  }
}

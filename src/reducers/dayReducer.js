import moment from 'moment';
import { SET_DAY } from '../actions';

const initialState = moment() //default is current day

export default function dayReducer(state = initialState, action) {
  switch(action.type) {
    case SET_DAY:
      return action.day;
    default:
      return state;
  }
}

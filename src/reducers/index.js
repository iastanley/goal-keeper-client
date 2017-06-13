import { combineReducers } from 'react-redux';
import userReducer from './userReducer';
import goalReducer from './goalReducer';

//REDUCER
export combineReducers({
  user: userReducer,
  goal: goalReducer
})

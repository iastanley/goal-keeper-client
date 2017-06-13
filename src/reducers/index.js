// ROOT REDUCER
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import goalReducer from './goalReducer';

//REDUCER
const rootReducer = combineReducers({
  user: userReducer,
  goal: goalReducer
})

export default rootReducer;

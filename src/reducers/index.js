// ROOT REDUCER
import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import goalReducer from './goalReducer';
import navReducer from './navReducer';
import dayReducer from './dayReducer';

//REDUCER
export const rootReducer = combineReducers({
  user: 'defaultUser',
  goal: goalReducer,
  navigation: navReducer,
  selectedDay: dayReducer
});

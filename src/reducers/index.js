// ROOT REDUCER
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import goalReducer from './goalReducer';
import navReducer from './navReducer';

//REDUCER
const rootReducer = combineReducers({
  user: userReducer,
  goal: goalReducer,
  navigation: navReducer
})

export default rootReducer;

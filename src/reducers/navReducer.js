import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
  TOGGLE_NEWTASK,
  TOGGLE_NEWGOAL,
  TOGGLE_GOAL_VIEW,
  CHANGE_RIGHT_NAV
} from '../actions';

const initialState = {
  showLogin: false,
  showSignup: false,
  showNewTask: false,
  showNewGoal: false,
  showGoalView: false,
  rightNavbarMenu: 'show-login-signup'
}

export function navReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_LOGIN:
    case TOGGLE_SIGNUP:
    case TOGGLE_NEWTASK:
    case TOGGLE_NEWGOAL:
    case TOGGLE_GOAL_VIEW:
    case CHANGE_RIGHT_NAV:
    default:
      return state;
  }
}

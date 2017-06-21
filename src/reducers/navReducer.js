import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
  TOGGLE_NEWTASK,
  TOGGLE_NEWGOAL,
  TOGGLE_GOAL_PANE,
  TOGGLE_EDITGOAL
} from '../actions';

export const initialState = {
  showLogin: false,
  showSignUp: false,
  showNewTask: false,
  showNewGoal: false,
  showEditGoal: {
    show: false,
    goalId: null
  },
  showGoalPane: false
}

export default function navReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_LOGIN:
      return Object.assign({}, state, {
        showLogin: action.show
      });
    case TOGGLE_SIGNUP:
      return Object.assign({}, state, {
        showSignUp: action.show
      });
    case TOGGLE_NEWTASK:
      return Object.assign({}, state, {
        showNewTask: action.show
      });
    case TOGGLE_NEWGOAL:
      return Object.assign({}, state, {
        showNewGoal: action.show
      });
    case TOGGLE_EDITGOAL:
      const { show, goalId } = action;
      return ({...state, showEditGoal: { show, goalId } });
    case TOGGLE_GOAL_PANE:
      return Object.assign({}, state, {
        showGoalPane: action.show
      });
    default:
      return state;
  }
}

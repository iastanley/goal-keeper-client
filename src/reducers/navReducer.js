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
      return ({...state, showLogin: action.show});
    case TOGGLE_SIGNUP:
      return ({...state, showSignUp: action.show});
    case TOGGLE_NEWTASK:
      return ({...state, showNewTask: action.show});
    case TOGGLE_NEWGOAL:
      return ({...state, showNewGoal: action.show});
    case TOGGLE_EDITGOAL:
      const { show, goalId } = action;
      return ({...state, showEditGoal: { show, goalId } });
    case TOGGLE_GOAL_PANE:
      return ({...state, showGoalPane: action.show});
    default:
      return state;
  }
}

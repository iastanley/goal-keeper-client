//ACTIONS


// types of actions

// create a goal

// create a task

// make login
// make async call
export const MAKE_LOGIN = 'MAKE_LOGIN';
export function makeLogin() {
  return {
    type: MAKE_LOGIN,
    promise: fetch("/login", {
      method: "POST"
    })
  }
}

//make signup async call
export const MAKE_SIGNUP = 'MAKE_SIGNUP';
export function makeSignUp() {
  return {
    type: MAKE_SIGNUP,
    promise: null //implement an async call here
  }
}

// show goals view
export const TOGGLE_GOAL_VIEW = 'TOGGLE_GOAL_VIEW';
export function toggleGoalView(show) {
  return {
    type: TOGGLE_GOAL_VIEW,
    show
  }
}

// show new goal modal
export const TOGGLE_NEWGOAL = 'TOGGLE_NEWGOAL';
export function toggleNewGoal(show) {
  return {
    type: TOGGLE_NEWGOAL,
    show
  }
}

// show new task modal
export const TOGGLE_NEWTASK = 'TOGGLE_NEWTASK';
export function toggleNewTask(show) {
  return {
    type: TOGGLE_NEWTASK,
    show
  }
}

// show login modal
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export function toggleLogin(show) {
  return {
    type: TOGGLE_LOGIN,
    show
  }
}

// show signup modal
export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';
export function toggleSignup(show) {
  return {
    type: TOGGLE_SIGNUP,
    show
  }
}

// Constants for changing nav view
export const navbarOptions = {
  landingView: 'show-login-signup',
  taskView: 'show-goal-button',
  goalView: 'show-task-button'
}

export const CHANGE_RIGHT_NAV = 'CHANGE_RIGHT_NAV';
export function changeRightNav(option) {
  return {
    type: CHANGE_RIGHT_NAV,
    option: option
  }
}

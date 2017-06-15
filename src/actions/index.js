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
export const TOGGLE_GOAL_PANE = 'TOGGLE_GOAL_PANE';
export function toggleGoalPane(show) {
  return {
    type: TOGGLE_GOAL_PANE,
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
export function toggleSignUp(show) {
  return {
    type: TOGGLE_SIGNUP,
    show
  }
}

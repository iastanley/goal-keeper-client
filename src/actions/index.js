//ACTIONS

// types of actions

// create a goal

// create a task

// show goals view

// show login
export const SHOW_LOGIN = 'SHOW_LOGIN';
export function showLogin() {
  return {
    type: SHOW_LOGIN
  }
}

// show signup
export const SHOW_SIGNUP = 'SHOW_SIGNUP';
export function showSignup() {
  return {
    type: SHOW_SIGNUP
  }
}

// make login
// make async call
export const MAKE_LOGIN = 'MAKE_LOGIN';
export function makeLogin() {
  return {
    type: MAKE_LOGIN,
    promise: fetch("/login", {
      method: "POST"
    });
  }
}

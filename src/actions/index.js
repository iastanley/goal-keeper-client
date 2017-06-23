import axios from 'axios';
const BASE_URL = 'https://goal-keeper-api.herokuapp.com';


// make login
// make async call
export const MAKE_LOGIN = 'MAKE_LOGIN';
export function makeLogin(username, password) {
  return {
    type: MAKE_LOGIN,
    promise: axios({
      url: `${BASE_URL}/users`,
      method: 'get',
      headers: {
        Authorization: `Basic ${btoa(username + ":" + password)}`
      }
    }),
    meta: {
      onSuccess: response => console.log(username, response),
      onFailure: response => console.log(response),
      username, password
    }
  }
}

//make signup async call
export const MAKE_SIGNUP = 'MAKE_SIGNUP';
export function makeSignUp(username, password) {
  return {
    type: MAKE_SIGNUP,
    promise: axios({
      url: `${BASE_URL}/users`,
      method: 'post',
      data: { username: username, password: password }
    }),
    meta: {
      onSuccess: response => console.log(response),
      username, password
    }
  }
}

// logout
export const LOGOUT = 'LOGOUT';
export function logOut() {
  return {
    type: LOGOUT
  }
}

// load goals from server
export const LOAD_GOAL = 'LOAD_GOAL';
export function loadGoal(currentUser) {
  return {
    type: LOAD_GOAL,
    promise: axios({
      url: `${BASE_URL}/goals?user=${currentUser}`,
      method: 'get',
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    })
  }
}

// create a goal
export const CREATE_GOAL = 'CREATE_GOAL';
export function createGoal(newGoal) {
  return {
    type: CREATE_GOAL,
    promise: axios({
      method: 'post',
      url: `${BASE_URL}/goals/`,
      data: newGoal,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response),
      onFailure: response => console.log(response)
    }
  }
}

export const EDIT_GOAL = 'EDIT_GOAL';
export function editGoal(editGoalId, update) {
  return {
    type: EDIT_GOAL,
    promise: axios({
      method: 'put',
      url: `${BASE_URL}/goals/${editGoalId}`,
      data: update,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response)
    }
  }
}

export const DELETE_GOAL = 'DELETE_GOAL';
export function deleteGoal(goalId) {
  return {
    type: DELETE_GOAL,
    promise: axios({
      method: 'delete',
      url: `${BASE_URL}/goals/${goalId}`,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response),
      goalId
    }
  }
}

// create a task
export const CREATE_TASK = 'CREATE_TASK';
export function createTask(goalId, newTask) {
  return {
    type: CREATE_TASK,
    promise: axios({
      method: 'post',
      url: `${BASE_URL}/goals/${goalId}/tasks`,
      data: newTask,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response)
    }
  }
}

export const EDIT_TASK = 'EDIT_TASK';
export function editTask(update) {
  return {
    type: EDIT_TASK,
    promise: axios({
      method: 'put',
      url: `${BASE_URL}/goals/${update.goalId}/tasks/${update.taskId}`,
      data: update,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response)
    }
  }
}

export const DELETE_TASK = 'DELETE_TASK';
export function deleteTask(goalId, taskId) {
  return {
    type: DELETE_TASK,
    promise: axios({
      method: 'delete',
      url: `${BASE_URL}/goals/${goalId}/tasks/${taskId}`,
      headers: {
        Authorization: `Basic ${localStorage.userToken}`
      }
    }),
    meta: {
      onSuccess: response => console.log(response),
      goalId,
      taskId
    }
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

// show edit goal modal
export const TOGGLE_EDITGOAL = 'TOGGLE_EDITGOAL';
export function toggleEditGoal(show, goalId) {
  return {
    type: TOGGLE_EDITGOAL,
    show,
    goalId
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

// set selectedDay
export const SET_DAY = 'SET_DAY';
export function setDay(day) {
  return {
    type: SET_DAY,
    day
  }
}

// USER REDUCER
import { handle } from 'redux-pack';

import {
  MAKE_LOGIN,
  MAKE_SIGNUP,
  LOGOUT,
  SET_USER_ERROR
} from '../actions';

const initialState = {
  user: null,
  userError: null,
  badCredentials: false,
  isLoading: false,
  loggedIn: false
}

if (localStorage.user) {
  initialState.user = localStorage.user;
}

if (localStorage.userToken) {
  initialState.loggedIn = true;
}

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_LOGIN:
      return handle(state, action, {
        start: prevState => ({...prevState, isLoading: true, badCredentials: false}),
        finish: prevState => ({...prevState, isLoading: false}),
        success: prevState => {
          localStorage.userToken = btoa(`${action.meta.username}:${action.meta.password}`);
          localStorage.user = action.meta.username;
          return {...prevState, user: action.payload.data.username, loggedIn: true}
        },
        failure: prevState => ({...prevState, badCredentials: true, userError: 'Login Failed. Try Again.'})
        });
    case MAKE_SIGNUP:
      return handle(state, action, {
        start: prevState => ({...prevState, isLoading: true, badCredentials: false}),
        finish: prevState => ({...prevState, isLoading: false}),
        success: prevState => {
          localStorage.userToken = btoa(`${action.meta.username}:${action.meta.password}`);
          localStorage.user = action.meta.username;
          return {...prevState, user: action.payload.data.username, loggedIn: true}
        },
        failure: prevState => {
          return {...prevState, badCredentials: true, userError: action.payload.response.data}
        }
      });
    case LOGOUT:
      return {...initialState}
    case SET_USER_ERROR:
      return {...state, userError: action.userError}
    default:
      return state;
  }
}

// const initialState = 'defaultUser';
//
// export default function(state = initialState, action) {
//   switch(action.type) {
//     default:
//       return state;
//   }
// }

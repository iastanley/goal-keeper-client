// USER REDUCER
import { handle } from 'redux-pack';

import {
  MAKE_LOGIN,
  MAKE_SIGNUP,
  LOGOUT
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

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_LOGIN:
      return handle(state, action, {
        start: prevState => ({...prevState, isLoading: true}),
        finish: prevState => ({...prevState, isLoading: false}),
        success: prevState => {
          localStorage.userToken = btoa(`${action.meta.username}:${action.meta.password}`);
          localStorage.user = action.meta.username;
          return {...prevState, user: action.payload.data.username, badCredentials: false, loggedIn: true}
        },
        failure: prevState => ({...prevState, badCredentials: true, userError: action.payload.data})
        });
    case MAKE_SIGNUP:
      return handle(state, action, {
        start: prevState => ({...prevState, isLoading: true}),
        finish: prevState => ({...prevState, isLoading: false}),
        success: prevState => {
          console.log(action.meta.username, action.meta.password);
          localStorage.userToken = btoa(`${action.meta.username}:${action.meta.password}`);
          localStorage.user = action.meta.username;
          return {...prevState, user: action.payload.data.username, badCredentials: false, loggedIn: true}
        },
        failure: prevState => ({...prevState, badCredentials: true, userError: action.payload.data})
      });
    case LOGOUT:
      return {...initialState}
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

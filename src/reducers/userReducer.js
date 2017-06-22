// USER REDUCER
import { handle } from 'redux-pack';

import {
  MAKE_LOGIN,
  MAKE_SIGNUP,
} from '../actions';

const initialState = {
  user: 'defaultUser',
  userError: null,
  badCredentials: false,
  isLoading
}

if (localStorage.user) {
  initialState.user = JSON.parse(localStorage.user);
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_LOGIN:
      return handle(state, action, {
          success: prevState => {

            localStorage.userToken = btoa(`${action.username}:${action.password}`);
            localStorage.user = JSON.stringify(action.payload.data.username);
            return {...prevState, user: action.payload.data.username, badCredentials: false}
          },
          failure: prevState => ({...prevState, badCredentials: true, userError: action.payload.data})
          });
    case MAKE_SIGNUP:
      return handle(state, action, {
        start: prevState => ({...prevState, isLoading: true}),
        finish: prevState => ({...prevState, isLoading: false}),
        success: prevState => {
          localStorage.userToken = btoa(`${action.username}:${action.password}`);
          return {...prevState, user: action.payload.data.username, badCredentials: false}
        },
        failure: prevState => ({...prevState, badCredentials: true, userError: action.payload.data})
      });
    default:
      return state;
  }
}

const initialState = 'defaultUser';

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

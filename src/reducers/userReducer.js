// USER REDUCER
import { handle } from 'redux-pack';

const initialState = {
  user: null,
  badCredentials: false,
  showLogin: false,
  showSignup: false
}

if (localStorage.user) {
  initialState.user = JSON.parse(localStorage.user);
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_LOGIN:
      return handle(state, action, {
          success: prevState => ({...prevState, user: payload, badCredentials: false}),
          failure: prevState => ({...prevState, badCredentials: true})
          });
    case MAKE_SIGNUP:
    case SHOW_LOGIN:
    case SHOW_SIGNUP:
    default:
      return state;
  }
}

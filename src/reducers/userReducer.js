// USER REDUCER
import { handle } from 'redux-pack';

import {
  MAKE_LOGIN,
  MAKE_SIGNUP,
} from '../actions';

// const initialState = {
//   user: null,
//   badCredentials: false
// }
//
// if (localStorage.user) {
//   initialState.user = JSON.parse(localStorage.user);
// }
//
// export function userReducer(state = initialState, action) {
//   switch(action.type) {
//     case MAKE_LOGIN:
//       return handle(state, action, {
//           success: prevState => {
//
//             localStorage.userToken = btoa(action.user + ':' + action.password);
//             localStorage.user = JSON.stringify(payload);
//             return {...prevState, user: payload, badCredentials: false}
//           },
//           failure: prevState => ({...prevState, badCredentials: true})
//           });
//     case MAKE_SIGNUP:
//     default:
//       return state;
//   }
// }

const initialState = 'defaultUser';

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

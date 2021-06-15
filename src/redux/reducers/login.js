import { LOGIN, USER_DATA } from '../actions/index';

const INITIAL_STATE = {
  token: '',
  name: '',
  email: '',
};

function tokenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    window.localStorage.setItem('token', action.token);
    return { ...state, token: action.token };
  case USER_DATA:
    return { ...state, name: action.name, email: action.email };
  default:
    return state;
  }
}

// function loguinReduce(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case LOGIN:
//     return {
//       name: action.name,
//       email: action.email,
//     };
//   default:
//     return state;
//   }
// }

export default tokenReducer;

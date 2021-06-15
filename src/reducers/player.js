import {
  NEW_EMAIL,
  NEW_TOKEN,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  token: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_EMAIL:
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.name,
    };
  case NEW_TOKEN:
    return {
      ...state,
      token: action.payload.token,
    };

  default:
    return state;
  }
}

export default userReducer;
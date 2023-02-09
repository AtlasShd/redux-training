import { FETCH_USERS, DELETE_USER } from '../actions/usersActions.js';

const defaultState = {
  users: [],
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case DELETE_USER:
      return { ...state, users: state.users.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export default usersReducer;

import { combineReducers } from 'redux';
import countReducer from './countReducer.js';
import usersReducer from './usersReducer.js';

const reducer = combineReducers({
  count: countReducer,
  users: usersReducer,
});

export default reducer;

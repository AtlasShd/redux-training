import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

const reducer = combineReducers({
  userReducer,
});

export default reducer;

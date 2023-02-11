import { combineReducers } from '@reduxjs/toolkit';
import { postAPI } from '../../services/PostServices';
import userReducer from './UserSlice';

const reducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export default reducer;

import { combineReducers } from 'redux';
import cashReducer from './cashReducer.js';
import customersReducer from './customersReducer.js';

const reducer = combineReducers({
  cash: cashReducer,
  customers: customersReducer,
});

export default reducer;

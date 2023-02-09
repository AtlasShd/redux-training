import { ADD_CUSTOMER, ADD_MANY_CUSTOMERS, DELETE_CUSTOMER } from '../actions/customersActions.js';

const defaultState = {
  customers: [],
};

const customersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default customersReducer;

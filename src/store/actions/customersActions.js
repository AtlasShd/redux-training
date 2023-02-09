const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
const deleteCustomerAction = (payload) => ({ type: DELETE_CUSTOMER, payload });

export {
  ADD_CUSTOMER,
  ADD_MANY_CUSTOMERS,
  DELETE_CUSTOMER,
  addCustomerAction,
  addManyCustomerAction,
  deleteCustomerAction,
};

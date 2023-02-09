import { addManyCustomerAction } from '../actions/customersActions.js';

const fetchCustomers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispatch(addManyCustomerAction(json)));
};

export {
  fetchCustomers,
};

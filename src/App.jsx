import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { putCashAction, takeCashAction } from './store/actions/cashActions.js';
import {
  addCustomerAction,
  deleteCustomerAction,
} from './store/actions/customersActions.js';
import { fetchCustomers } from './store/asyncActions/customersAsyncActions.js';

function App() {
  const dispatch = useDispatch();
  const {
    cash: { cash },
    customers: { customers },
  } = useSelector((state) => state);

  const putCash = (value) => {
    dispatch(putCashAction(value));
  };

  const takeCash = (value) => {
    dispatch(takeCashAction(value));
  };

  const addCustomer = (name) => {
    const value = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(value));
  };

  const deleteCustomer = (value) => {
    dispatch(deleteCustomerAction(value));
  };

  return (
    <div className="container">
      <div className="buttons">
        <button className="button" onClick={() => putCash(+prompt())}>
          Put cash
        </button>
        <button className="button" onClick={() => takeCash(+prompt())}>
          Take cash
        </button>
        <button className="button" onClick={() => addCustomer(prompt())}>
          Add customer
        </button>
        <button className="button" onClick={() => dispatch(fetchCustomers())}>
          Fetch customers
        </button>
      </div>
      <div className="cash">{cash}</div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer, index) => (
            <div
              key={index}
              className="customer"
              onClick={() => deleteCustomer(customer.id)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-customers">There are no customers!</div>
      )}
    </div>
  );
}

export default App;

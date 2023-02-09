import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
  decrementAsyncAction,
} from './store/actions/countActions.js';
import {
  deleteUserAction,
  fetchUsersAsyncAction,
} from './store/actions/usersActions.js';

function App() {
  const dispatch = useDispatch();
  const {
    count: { count },
    users: { users },
  } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="buttons">
        <button className="button" onClick={() => dispatch(incrementAction(1))}>
          Increment
        </button>
        <button
          className="button"
          onClick={() => dispatch(incrementAsyncAction(1))}>
          Async increment
        </button>
        <button className="button" onClick={() => dispatch(decrementAction(1))}>
          Decrement
        </button>
        <button
          className="button"
          onClick={() => dispatch(decrementAsyncAction(1))}>
          Async decrement
        </button>
        <button
          className="button"
          onClick={() => dispatch(fetchUsersAsyncAction())}>
          Fetch users
        </button>
      </div>
      <div className="count">{count}</div>

      {users.length > 0 ? (
        <div>
          {users.map((user, index) => (
            <div
              key={index}
              className="user"
              onClick={() => dispatch(deleteUserAction(user.id))}>
              {user.name}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-users">There are no users!</div>
      )}
    </div>
  );
}

export default App;

const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_ASYNC = 'FETCH_USERS_ASYNC';
const DELETE_USER = 'DELETE_USER';

const fetchUsersAction = (payload) => ({ type: FETCH_USERS, payload });
const fetchUsersAsyncAction = (payload) => ({ type: FETCH_USERS_ASYNC, payload });
const deleteUserAction = (payload) => ({ type: DELETE_USER, payload });

export {
  FETCH_USERS,
  FETCH_USERS_ASYNC,
  DELETE_USER,
  fetchUsersAction,
  fetchUsersAsyncAction,
  deleteUserAction,
};

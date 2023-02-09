import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersAction, FETCH_USERS_ASYNC } from '../actions/usersActions.js';

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchUsersWorker() {
  const data = yield call(fetchUsers);
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(fetchUsersAction(json));
}

function* usersWatcher() {
  yield takeEvery(FETCH_USERS_ASYNC, fetchUsersWorker);
}

export default usersWatcher;

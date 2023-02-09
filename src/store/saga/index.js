import { all } from 'redux-saga/effects';
import countWatcher from './countSaga.js';
import usersWatcher from './usersSaga.js';

function* watcher() {
  yield all([countWatcher(), usersWatcher()]);
}

export default watcher;

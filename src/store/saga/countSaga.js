import { put, takeEvery } from 'redux-saga/effects';
import {
  decrementAction, DECREMENT_ASYNC, incrementAction, INCREMENT_ASYNC,
} from '../actions/countActions.js';

// eslint-disable-next-line no-promise-executor-return
const delayFunc = (mc) => new Promise((res) => setTimeout(res, mc));

function* incrementWorker(value) {
  yield delayFunc(1000);
  yield put(incrementAction(value));
}

function* decrementWorker(value) {
  yield delayFunc(1000);
  yield put(decrementAction(value));
}

function* countWatcher() {
  yield takeEvery(INCREMENT_ASYNC, (value) => incrementWorker(value.payload));
  yield takeEvery(DECREMENT_ASYNC, (value) => decrementWorker(value.payload));
}

export default countWatcher;

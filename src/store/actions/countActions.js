const INCREMENT = 'INCREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const DECREMENT = 'DECREMENT';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

const incrementAction = (payload) => ({ type: INCREMENT, payload });
const incrementAsyncAction = (payload) => ({ type: INCREMENT_ASYNC, payload });
const decrementAction = (payload) => ({ type: DECREMENT, payload });
const decrementAsyncAction = (payload) => ({ type: DECREMENT_ASYNC, payload });

export {
  INCREMENT,
  INCREMENT_ASYNC,
  DECREMENT,
  DECREMENT_ASYNC,
  incrementAction,
  incrementAsyncAction,
  decrementAction,
  decrementAsyncAction,
};

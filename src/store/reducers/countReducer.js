import { INCREMENT, DECREMENT } from '../actions/countActions.js';

const defaultState = {
  count: 0,
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + +action.payload };
    case DECREMENT:
      return { ...state, count: state.count - +action.payload };
    default:
      return state;
  }
};

export default countReducer;

import { PUT_CASH, TAKE_CASH } from '../actions/cashActions.js';

const defaultState = {
  cash: 0,
};

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PUT_CASH:
      return { ...state, cash: state.cash + +action.payload };
    case TAKE_CASH:
      return { ...state, cash: state.cash - +action.payload };
    default:
      return state;
  }
};

export default cashReducer;

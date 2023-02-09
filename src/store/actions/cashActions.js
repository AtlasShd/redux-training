const PUT_CASH = 'PUT_CASH';
const TAKE_CASH = 'TAKE_CASH';

const putCashAction = (payload) => ({ type: PUT_CASH, payload });
const takeCashAction = (payload) => ({ type: TAKE_CASH, payload });

export {
  PUT_CASH,
  TAKE_CASH,
  putCashAction,
  takeCashAction,
};

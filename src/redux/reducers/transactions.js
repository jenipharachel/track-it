import ActionType from '../actions/types';

const transactions = function (state = [], action) {
  switch (action.type) {
    case ActionType.UPDATE_INCOME_EXPENSE_DATA:
      return {
        ...state,
        transactionHistory: [...action.transactionHistory],
      };
    default:
      return state;
  }
};

export default transactions;

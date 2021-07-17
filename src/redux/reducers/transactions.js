import ActionType from '../actions/types';

const transactions = function (state = [], action) {
  switch (action.type) {
    case ActionType.ADD_INCOME_EXPENSE_DATA:
      return {
        ...state,
        transactionHistory: [...action.transactionHistory],
      };
    case ActionType.EDIT_INCOME_EXPENSE_DATA:
      return {
        ...state,
        transactions: [...action.transactions],
      };
    default:
      return state;
  }
};

export default transactions;

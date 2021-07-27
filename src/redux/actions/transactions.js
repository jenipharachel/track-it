import ActionType from './types';

export function getTransaction() {
  return {
    type: ActionType.GET_INCOME_EXPENSE_DATA,
  };
}

export function updateTransaction(transactionList) {
  return {
    type: ActionType.UPDATE_INCOME_EXPENSE_DATA,
    transactionHistory: transactionList,
  };
}

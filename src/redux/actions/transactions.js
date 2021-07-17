import ActionType from './types';
import store from '../store';

export function addTransaction(transactionList) {
  return {
    type: ActionType.ADD_INCOME_EXPENSE_DATA,
    transactionHistory: transactionList,
  };
}

export function editTransaction(modifiedData) {
  return {
    type: ActionType.EDIT_INCOME_EXPENSE_DATA,
    transactions: modifiedData,
  };
}

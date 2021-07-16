import ActionType from './types';
import store from '../store';

export function addTransaction(incomingTransaction, date) {
  return {
    type: ActionType.ADD_INCOME_EXPENSE_DATA,
    incomingTransaction: incomingTransaction,
    date: date,
  };
}

export function editTransaction(modifiedData) {
  return {
    type: ActionType.EDIT_INCOME_EXPENSE_DATA,
    transactions: modifiedData,
  };
}

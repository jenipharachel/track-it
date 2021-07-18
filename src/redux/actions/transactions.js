import ActionType from './types';
import store from '../store';

export function updateTransaction(transactionList) {
  return {
    type: ActionType.UPDATE_INCOME_EXPENSE_DATA,
    transactionHistory: transactionList,
  };
}

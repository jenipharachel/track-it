import ActionType from './types';

export function getBalance() {
  return {
    type: ActionType.GET_BALANCE,
  };
}

export function updateBalance(status) {
  return {
    type: ActionType.UPDATE_BALANCE,
    status: status,
  };
}

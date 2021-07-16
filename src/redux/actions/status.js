import ActionType from './types';
import store from '../store';

export function getBalance() {
  return {
    type: ActionType.GET_BALANCE,
  };
}

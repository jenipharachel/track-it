import {all, fork} from 'redux-saga/effects';
import {watchBalanceStatus} from './status';
import {watchTransactionList} from './transactions';

export function* rootSaga() {
  yield all([fork(watchBalanceStatus), fork(watchTransactionList)]);
}

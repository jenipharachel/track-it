import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import {storage} from '../../utils/storage';
import ActionType from '../actions/types';

function* getTransactionList() {
  try {
    let transactionList = storage.getItem('transactionHistory');
    if (transactionList)
      yield put({
        type: ActionType.UPDATE_INCOME_EXPENSE_DATA,
        transactionHistory: transactionList,
      });
  } catch (error) {
    console.log(error);
  }
}
export function* watchTransactionList() {
  yield takeEvery('GET_INCOME_EXPENSE_DATA', getTransactionList);
}

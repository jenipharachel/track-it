import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
import {storage} from '../../utils/storage';
import ActionType from '../actions/types';

// Worker
function* getBalanceStatus() {
  try {
    let status = storage.getItem('status');
    if (status)
      yield put({
        type: ActionType.UPDATE_BALANCE,
        status: status,
      });
  } catch (error) {
    console.log(error);
  }
}

// Watcher
export function* watchBalanceStatus() {
  yield takeEvery('GET_BALANCE', getBalanceStatus);
}

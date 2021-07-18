import {combineReducers} from 'redux';
import status from './status';
import transactions from './transactions';
import modal from './modal';

const reducers = combineReducers({
  status,
  transactions,
  modal,
});

export default reducers;

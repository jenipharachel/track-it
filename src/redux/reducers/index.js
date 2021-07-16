import {combineReducers} from 'redux';
import status from './status';
import transactions from './transactions';

const reducers = combineReducers({
  status,
  transactions,
});

export default reducers;

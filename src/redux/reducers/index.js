import {combineReducers} from 'redux';
import status from './status';

const reducers = combineReducers({
  status: status,
});

export default reducers;

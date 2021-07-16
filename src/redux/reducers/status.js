import ActionType from '../actions/types';

const defaultState = {
  balance: 0,
  income: 0,
  expense: 0,
};

const status = function (state = defaultState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};

export default status;

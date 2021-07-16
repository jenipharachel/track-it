import ActionType from '../actions/types';
import moment from 'moment';

const currentDate = moment(new Date()).format('LL');

const defaultState = {
  [`${currentDate}`]: [
    {
      amount: 0,
      desc: '',
      transType: '',
    },
  ],
};

const transactions = function (state = defaultState, action) {
  const addBasedOnDate = (incomingTransaction, date, transactions) => {
    let dates = transactions && Object.keys(transactions);
    if (transactions) {
      if (dates.length > 0 && dates.includes(date))
        transactions[date].unshift(incomingTransaction);
      else transactions[date] = [incomingTransaction];
      return transactions;
    } else {
      let newState = {};
      newState[date] = [incomingTransaction];
      return newState;
    }
  };

  switch (action.type) {
    case ActionType.ADD_INCOME_EXPENSE_DATA:
      return {
        ...state,
        transactions: addBasedOnDate(
          action.incomingTransaction,
          action.date,
          state.transactions,
        ),
      };
    case ActionType.EDIT_INCOME_EXPENSE_DATA:
      return {
        ...state,
        transactions: action.transactions,
      };
    default:
      return state;
  }
};

export default transactions;

import _ from 'lodash';

export function addBasedOnDate(incomingTransaction, date, transactions) {
  let dayTransactions = {
    date: date,
    trans: [incomingTransaction],
  };
  if (transactions) {
    let isDateExist = transactions.some(el => el.date == date);
    if (isDateExist)
      transactions.forEach(dayTransactions => {
        if (dayTransactions.date == date)
          dayTransactions.trans.unshift(incomingTransaction);
      });
    else transactions.push(dayTransactions);
    return sortTransactionsByDate(transactions);
  } else {
    let newState = [];
    newState.push(dayTransactions);
    return newState;
  }
}

const sortTransactionsByDate = transactionsList => {
  let sortedList = _.sortBy(transactionsList, function (dayTransactions) {
    return new Date(dayTransactions.date);
  }).reverse();
  return sortedList;
};

export function updateBasedOnID(
  currentTransaction,
  date,
  transactions,
  recordID,
) {
  transactions.forEach(dayTransactions => {
    if (dayTransactions.date == date) {
      dayTransactions.trans[recordID] = currentTransaction;
      return dayTransactions;
    }
  });
  return sortTransactionsByDate(transactions);
}

export function deleteSelectedRecord(recordID, date, transactions) {
  let modifiedTransList = transactions.filter((dayTransactions, dayID) => {
    if (dayTransactions.date == date) {
      let modifiedTransactions = dayTransactions.trans.filter(
        (record, transID) => transID !== recordID,
      );
      dayTransactions.trans = modifiedTransactions;
      return dayTransactions.trans.length > 0;
    }
  });
  return modifiedTransList;
}

export function modifyStatusForDeletion(status, record) {
  if (record.transactionType == 'Expense') {
    status.balance += parseInt(record.amount);
    status.expense -= parseInt(record.amount);
    return status;
  } else {
    if (status.balance >= record.amount) {
      status.balance -= parseInt(record.amount);
      status.income -= parseInt(record.amount);
      return status;
    } else {
      alert('Balance cannot be below 0');
      return null;
    }
  }
}

export function validateStatus(
  curntBalance,
  newAmt,
  record,
  status,
  transactionType,
) {
  if (record) {
    if (record.transactionType == transactionType)
      if (transactionType == 'Expense') {
        if (curntBalance + record.amount >= newAmt) {
          status.expense = status.expense - record.amount + parseInt(newAmt);
          status.balance = status.income - status.expense;
          return status;
        } else {
          alert('Purchase cannot be made since Bank balance is 0');
        }
      } else {
        status.income = status.income - record.amount + parseInt(newAmt);
        status.balance = status.income - status.expense;
        return status;
      }
    else {
      if (transactionType == 'Expense') {
        if (curntBalance - record.amt - newAmt) {
          status.expense = status.expense + parseInt(newAmt);
          status.income = status.income - record.amount;
          status.balance = status.income - status.expense;
          return status;
        } else {
          alert('Purchase cannot be made since Bank balance is 0');
        }
      } else {
        status.income = status.income + parseInt(newAmt);
        status.expense = status.expense - record.amount;
        status.balance = status.income - status.expense;

        return status;
      }
    }
  } else {
    if (transactionType == 'Expense') {
      if (curntBalance >= newAmt) {
        status.expense += parseInt(newAmt);
        status.balance = status.income - status.expense;
        return status;
      } else {
        alert('Purchase cannot be made since Bank balance is 0');
      }
    } else {
      status.income += parseInt(newAmt);
      status.balance = status.income - status.expense;

      return status;
    }
  }
}

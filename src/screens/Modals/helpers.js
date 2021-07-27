import _ from 'lodash';

export function addBasedOnDate(incomingTransaction, date, transactions) {
  let dayTransactions = {
    date: date,
    trans: [incomingTransaction],
  };
  if (transactions) {
    let isDateExist = transactions.some((el) => el.date === date);
    if (isDateExist)
      transactions.forEach((dayTransactions) => {
        if (dayTransactions.date === date) dayTransactions.trans.unshift(incomingTransaction);
      });
    else transactions.push(dayTransactions);
    return sortTransactionsByDate(transactions);
  } else {
    let newState = [];
    newState.push(dayTransactions);
    return newState;
  }
}

const sortTransactionsByDate = (transactionsList) => {
  let sortedList = _.sortBy(transactionsList, function (dayTransactions) {
    return new Date(dayTransactions.date);
  }).reverse();
  return sortedList;
};

export function updateBasedOnID(currentTransaction, date, transactions, recordID) {
  transactions.forEach((dayTransactions) => {
    if (dayTransactions.date === date) {
      dayTransactions.trans[recordID] = currentTransaction;
      return dayTransactions;
    }
  });
  return sortTransactionsByDate(transactions);
}

export function deleteSelectedRecord(recordID, date, transactions) {
  let modifiedTransList = transactions.filter((dayTransactions) => {
    if (dayTransactions.date === date) {
      let modifiedTransactions = dayTransactions.trans.filter((record, transID) => transID !== recordID);
      dayTransactions.trans = modifiedTransactions;
      return dayTransactions.trans.length > 0;
    }
  });
  return modifiedTransList;
}

export function modifyStatusForDeletion(status, record) {
  if (record.transactionType === 'Expense') {
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

export function validateStatus(currentBalance, newAmt, recordBeforeEdit, status, newtransactionType) {
  if (newtransactionType === 'Expense') {
    // Expense Transaction
    if (recordBeforeEdit) {
      if (recordBeforeEdit.transactionType === newtransactionType) {
        // No change in mode of transaction
        if (currentBalance + recordBeforeEdit.amount >= newAmt) {
          status.expense = status.expense - recordBeforeEdit.amount + parseInt(newAmt);
          status.balance = status.income - status.expense;
          return status;
        } else {
          alert('Purchase cannot be made since Bank balance is 0');
        }
      } else {
        // Mode of transaction changed
        if (parseInt(currentBalance) - recordBeforeEdit.amount >= parseInt(newAmt)) {
          status.expense = status.expense + parseInt(newAmt);
          status.income = status.income - recordBeforeEdit.amount;
          status.balance = status.income - status.expense;
          return status;
        } else {
          alert('Purchase cannot be made since Bank balance is 0');
        }
      }
    } else {
      if (currentBalance >= newAmt) {
        status.expense += parseInt(newAmt);
        status.balance = status.income - status.expense;
        return status;
      } else {
        alert('Purchase cannot be made since Bank balance is 0');
      }
    }
  } else {
    // Income Transaction
    status.income += parseInt(newAmt);
    if (recordBeforeEdit) {
      if (recordBeforeEdit.transactionType === newtransactionType) {
        // No change in mode of transaction after
        status.income -= recordBeforeEdit.amount;
      } else status.expense -= recordBeforeEdit.amount;
    }
    status.balance = status.income - status.expense;
    return status;
  }
}

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
    return transactions;
  } else {
    let newState = [];
    newState.push(dayTransactions);
    return newState;
  }
}

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
  return transactions;
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

export function modifyStatus(status, record) {
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

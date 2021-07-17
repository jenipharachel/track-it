export function addBasedOnDate(incomingTransaction, date, transactions) {
  let dayTransactions = {
    date: date,
    trans: [incomingTransaction],
  };
  if (transactions) {
    isDateExist = transactions.some(el => el.date == date);
    if (isDateExist)
      transactions.forEach(item => {
        if (item.date == date) item.trans.unshift(incomingTransaction);
      });
    else transactions.push(dayTransactions);
    return transactions;
  } else {
    let newState = [];
    newState.push(dayTransactions);
    return newState;
  }
}

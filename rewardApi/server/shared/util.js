const { FILTER_TRANSACTION } = require("../shared/constant");

const getThreeMonthDate = (currentDate = new Date()) => {
  return new Date(currentDate.setMonth(currentDate.getMonth() - 3));
};

const getLastThreeMonthsRecords = (transactionList, userId) => {
  let filteredList = transactionList.filter(
    (trans) =>
      new Date(trans.transactionDate) > getThreeMonthDate()
  );
  return filteredList;
};
const getAllRecords = (transactionList) => {
  return transactionList;
};

const calculateRewards = (price) => {
  if (price >= 50 && price < 100) {
    return price - 50;
  } else if (price >= 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
};
const addTransactionData = (price, userId) => {
  const transaction = {
    userId,
    price,
    rewards: calculateRewards(price),
    transactionDate: new Date(),
  };
  return transaction;
};
const getPerMonthReward = (month, transactionList, userId) => {
  const rewards = [];
  for (let i = 0; i < month; i++) {
    let filteredList = transactionList.filter(
      (trans) =>
       new Date(trans.transactionDate)?.getMonth() === new Date().getMonth() - i &&
        trans?.userId === userId
    );
    let perMonthObj = {};
    perMonthObj.rewards = filteredList.reduce(
      (acc, key) => key.rewards + acc,
      0
    );
    perMonthObj.transactionDate = filteredList[0].transactionDate;
    rewards.push(perMonthObj);
  }
  return rewards;
};


const fetchRecords = (filterType, transactionList, month = 1, userId) => {
  if (transactionList.length) {
    switch (filterType) {
      case FILTER_TRANSACTION.ALL: {
        return getAllRecords(transactionList);
      }
      case FILTER_TRANSACTION.THREE_MONTH: {
        return getLastThreeMonthsRecords(transactionList, userId);
      }
      case FILTER_TRANSACTION.PER_MONTH_REWARD: {
        return getPerMonthReward(month, transactionList, userId);
      }
      default: {
        return transactionList;
      }
    }
  }
  return transactionList;
};

module.exports={getThreeMonthDate, getLastThreeMonthsRecords, getAllRecords, calculateRewards, addTransactionData, getPerMonthReward,fetchRecords
}
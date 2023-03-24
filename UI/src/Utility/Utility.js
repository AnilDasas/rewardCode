import { FILTER_TRANSACTION, transactionColumn } from "../Contants/Enums";

export const getTotalRewards = (transactionList) => {
  return transactionList.length
    ? transactionList.reduce((acc, key) => key.rewards + acc, 0)
    : 0;
};
export const getTableColumns = (filter) => {
  const columns = transactionColumn;
  if (filter === FILTER_TRANSACTION.PER_MONTH_REWARD) {
    columns[0].isVisible = false;
  } else {
    columns[0].isVisible = true;
  }
  return columns;
};

export const shouldComponentVisible = (filter, check) => {
  return check.filter((x) => x === filter).length ? true : false;
};

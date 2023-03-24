const { FILTER_TRANSACTION } = require("../shared/constant");
const { mockData } = require("../shared/constant");
const { addTransactionData, fetchRecords } = require("../shared/util");

const fetchRecordByUserId = (userId) => {
  return mockData.filter((data) => data.userId == userId);
};
const getAllRecord = () => {
  return fetchRecords(FILTER_TRANSACTION.ALL, mockData);
};
const getThreeMonthsRecord = (userId) => {
  return fetchRecords(FILTER_TRANSACTION.THREE_MONTH, mockData, 3, userId);
};
const getPerMonthReord = (userId) => {
  return fetchRecords(FILTER_TRANSACTION.PER_MONTH_REWARD, mockData, 1, userId);
};
const addReward = (data) => {
  const { price, userId } = data;
  mockData.push(addTransactionData(price, userId));
  return mockData;
};

module.exports={fetchRecordByUserId, getAllRecord,getThreeMonthsRecord, getPerMonthReord, addReward }

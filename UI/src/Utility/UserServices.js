import { FILTER_TRANSACTION } from "../Contants/Enums";
import { httpRequest } from "./httpClient";

export const loadRecords = async() => {
    const {data} = await httpRequest('/api/v1/user/getAllRecord', 'get',{},{})
    return data;
};
export const addTransaction = async(price, userId) => {
    const {data} = await httpRequest('/api/v1/user/addReward', 'post',{price, userId},{})
    return data;
};
export const getUserData = async(userId) => {
    const {data} = await httpRequest(`/api/v1/user/getRecord/${userId}`, 'get',{},{})
    return data;
};
export const getFilteredRecords = async(
    filterType,
    transactionList,
    userId,
    month = 1,
  ) => {
      switch (filterType) {
        case FILTER_TRANSACTION.ALL: {
          return  await httpRequest('/api/v1/user/getAllRecord', 'get',{},{});
        }
        case FILTER_TRANSACTION.THREE_MONTH: {
          return await httpRequest(`/api/v1/user/getThreeMonthsRecord/${userId}`, 'get',{},{});
        }
        case FILTER_TRANSACTION.PER_MONTH_REWARD: {
          return  await httpRequest(`/api/v1/user/getPerMonthRecord/${userId}`, 'get',{},{});
        }
        default: {
          return transactionList;
        }
      }
  };
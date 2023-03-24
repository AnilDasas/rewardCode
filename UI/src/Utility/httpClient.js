import axios from "axios";

const instance = axios.create({
  baseUrl: process.env.REACT_APP_BASE_URL,
});

const setHeader = (config) => {
  const defaultHeader = {
    Accept: "application/json, text/plain",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  return { ...defaultHeader, config };
};
export const httpRequest = async (url, method, data, config, params) => {
  const headers = setHeader(config);
  return await instance({
    url:`${process.env.REACT_APP_BASE_URL}${url}`,
    method,
    data,
    params,
    headers,
  });
};

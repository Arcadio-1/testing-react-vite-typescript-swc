import axios from "axios";
const BASE_URL = "http://localhost:8000";
const client = axios.create({ baseURL: BASE_URL });

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = 1999999999999;
  client.defaults
  const onSuccess = <T>(response: T): T => response;
  const onError = <T>(error: T): T => {
    //additinal logging here
    console.log(error);
    return error;
  };
  return client({...options,}).then(onSuccess).catch(onError);
};

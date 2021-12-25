import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const BASE_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => Promise.reject(error),
  );

  return api;
};

export {createAPI};

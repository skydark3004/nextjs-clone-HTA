import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { getStateFromUserStore } from '@/store';

const axiosInstance = new AxiosInstance(ENV.BASE_URL_BACK_END, {});
axiosInstance.instance.interceptors.request.use(
  function (config) {
    const { accessToken } = getStateFromUserStore();
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

axiosInstance.instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const instanceClient = axiosInstance;

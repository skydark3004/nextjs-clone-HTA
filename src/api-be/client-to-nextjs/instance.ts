import { AxiosInstance } from '@/utils/axios.util';
import { getStateFromUserStore } from '@/store';
import { APP_CONFIG } from '@/config/app.config';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = new AxiosInstance(APP_CONFIG.ENV.BASE_URL_FRONT_END);
axiosInstance.instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    const { accessToken } = getStateFromUserStore();
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      /*       NextResponse.next().cookies.delete(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);

      redirect(ROUTE_LOGIN); */
    }
    throw error.response.data;
  },
);

export const instanceClientToNext = axiosInstance;

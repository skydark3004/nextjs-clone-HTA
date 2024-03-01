import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';

import { redirect } from 'next/navigation';
import { CookieUtilsServer } from '@/utils/cookie/server';
import { NextResponse } from 'next/server';

const ROUTE_LOGIN = '/dang-nhap';

const axiosInstance = new AxiosInstance(ENV.BASE_URL_BACK_END, {});
axiosInstance.instance.interceptors.request.use(
  function (config) {
    const token = CookieUtilsServer.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      NextResponse.next().cookies.delete(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);

      redirect(ROUTE_LOGIN);
    }
    throw error.response.data;
  },
);

export const instanceServer = axiosInstance;

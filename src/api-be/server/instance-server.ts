import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

const ROUTE_LOGIN = '/dang-nhap';

const interceptorRequest = async (config: any) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  const token = cookie?.value;

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const interceptorResponseWithSuccess = async (response: any) => {
  console.log('response::----------------------------------');
  return response.data;
};

const interceptorResponseWithError = async (error: any) => {
  console.log('error::----------------------------------');
  console.log('error::', error);

  if (error.response.status === 401) {
    console.log('vào đây');
    redirect('/dang-nhap');
  }
  throw error;
  return Promise.reject(error);
};

const instance = new AxiosInstance(
  ENV.BASE_URL_BACK_END,
  {},
  {
    request: interceptorRequest,
    response: {
      withSuccess: interceptorResponseWithSuccess,
      withError: interceptorResponseWithError,
    },
  },
);

export default instance;

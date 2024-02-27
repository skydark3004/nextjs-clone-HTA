import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsClient } from '@/utils/cookie/client';
import { UserGlobalContext, useUserContext } from '@/context';
import React from 'react';

const interceptorRequest = async (config: any) => {
  /*  const context = UserGlobalContext.
  const { dataContext } = useUserContext();
  const context = React.useContext(UserGlobalContext);
  console.log('dataContext::', dataContext);

  //const token = CookieUtilsClient.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);

  config.headers.Authorization = `Bearer ${dataContext?.accessToken}`; */
  return config;
};

export const instanceClient = new AxiosInstance(ENV.BASE_URL_BACK_END, {}, { request: interceptorRequest });

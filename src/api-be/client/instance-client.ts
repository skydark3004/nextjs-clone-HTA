import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';
import { CookieUtilsClient } from '@/utils/cookie/client';
const interceptorRequest = async (config: any) => {
  const token = CookieUtilsClient.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

export const instanceClient = new AxiosInstance(ENV.BASE_URL, {}, { request: interceptorRequest });
import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';
import { isServer } from '@/common';

const interceptorRequest = async (config: any) => {
  let token;

  if (isServer()) {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();
    const cookie = cookieStore.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
    token = cookie?.value;
  } else {
    const { getCookie } = await import('cookies-next');
    token = getCookie(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const instance = new AxiosInstance(ENV.BASE_URL, {}, { request: interceptorRequest });

export default instance;

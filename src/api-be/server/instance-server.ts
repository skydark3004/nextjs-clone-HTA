import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';
import { APP_CONFIG } from '@/config/app.config';
import { cookies } from 'next/headers';

const interceptorRequest = async (config: any) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(APP_CONFIG.ENV.KEY_ACCESS_TOKEN);
  const token = cookie?.value;

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const instance = new AxiosInstance(ENV.BASE_URL, {}, { request: interceptorRequest });

export default instance;

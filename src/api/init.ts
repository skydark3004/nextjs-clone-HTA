import { AxiosInstance } from '@/utils/axios.util';
import ENV from '@/config/env.config';

const instance = new AxiosInstance(ENV.BASE_URL, {});

export default instance;

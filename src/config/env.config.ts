/* import * as path from 'path';
import * as dotenv from 'dotenv';
const ROOT = path.normalize(__dirname + '/../..');
dotenv.config({ path: `${ROOT}/.env` }); */

const envConfig = {
  NODE_ENV: process.env.NODE_ENVIROMENT || 'local',
  VERSION: process.env.VERSION || 'v1',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || `core-devjwtauthenticate-core.dev_professional#2023`,
  KEY_ACCESS_TOKEN: process.env.NEXT_PUBLIC_KEY_ACCESS_TOKEN || `accessToken`,
};

export default envConfig;

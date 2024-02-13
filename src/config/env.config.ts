/* import * as path from 'path';
import * as dotenv from 'dotenv';
const ROOT = path.normalize(__dirname + '/../..');
dotenv.config({ path: `${ROOT}/.env` }); */

const envConfig = {
  NODE_ENV: process.env.NODE_ENV || 'local',
  VERSION: process.env.VERSION || 'v1',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
};

export default envConfig;

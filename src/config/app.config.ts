import envConfig from './env.config';

const ENV = envConfig;

export const APP_CONFIG = {
  ENV: ENV,
  IS_PRODUCTION: process.env.NODE_ENVIROMENT === 'production',
  IS_DEVELOP: process.env.NODE_ENVIROMENT === 'develop',
  IS_STAGING: process.env.NODE_ENVIROMENT === 'staging',
  IS_TESTING: process.env.NODE_ENVIROMENT === 'test',
  IS_LOCAL: process.env.NODE_ENVIROMENT === 'local',
};

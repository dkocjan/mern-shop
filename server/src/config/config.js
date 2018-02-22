// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// default config
const defaultConfig = {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
};

// development config
const devConfig = {
  MONGO_URL: process.env.MONGO_URL_DEV,
  JWT_SECRET: process.env.JWT_SECRET_DEV,
};

// test config
const testConfig = {
  MONGO_URL: process.env.MONGO_URL_TEST,
  JWT_SECRET: process.env.JWT_SECRET_TEST,
};

// production config
const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD,
  JWT_SECRET: process.env.JWT_SECRET_PROD,
};

function envConfig(env) {
  switch (env) {
    case 'development':
    case 'dev':
      return devConfig;
    case 'test':
    case 'testing':
      return testConfig;
    case 'production':
    case 'prod':
      return prodConfig;
    default:
      return devConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};

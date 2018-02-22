// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// default config
const defaultConfig = {
  PORT: process.env.PORT,
};

// development config
const devConfig = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

// production config
const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD,
  JWT_SECRET: process.env.JWT_SECRET_PROD,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'production':
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};

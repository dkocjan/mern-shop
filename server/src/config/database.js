/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config';

// Remove promise warning
mongoose.Promise = global.Promise;

try {
  mongoose.connect(config.MONGO_URL);
} catch (err) {
  mongoose.createConnection(config.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('    MongoDB running'))
  .on('error', e => {
    throw e;
  });
/*
export const connectMongoDB = (config = config) => {
  console.log(config.MONGO_URL);
  return mongoose.connect(config.MONGO_URL, {
    useMongoClient: true,
  });
};
*/
/////
/*
const url = config.MONGO_URL;
mongoose.connect(url, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${url}`);
});

if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
*/

// Connect the db with the url provide
/*
try {
  mongoose.connect(config.MONGO_URL);
} catch (err) {
  mongoose.createConnection(config.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('    MongoDB running'))
  .on('error', e => {
    throw e;
  });
*/

/*


import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URL);

mongoose.connection.on('error', () =>
  console.error('Could not connect to MongoDB. Did you forget to run `mongod`?')
);

mongoose.connection.on('connected', () =>
  console.info(
    `APP MONGODB@${mongoose.version}:`,
    process.env.MONGO_URL || config.get('MONGO_URL')
  )
);

mongoose.connection.on('disconnected', () =>
  console.info(`Mongoose disconnected to: ${config.get('MONGO_URL')}`)
);

 */

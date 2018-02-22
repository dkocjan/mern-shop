/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
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

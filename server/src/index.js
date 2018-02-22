/* eslint-disable no-console */
import http from 'http';
import chalk from 'chalk';
import { createServer } from 'http';

import config from './config/config';
import app from './server';

const server = http.createServer(app);
let currentApp = app;

server.listen(config.PORT, err => {
  if (err) {
    console.log(chalk.red(`Error: ${err}`));
  } else {
    console.log(`
    Everything works! ${chalk.bold.red('🔥')}
    Server listening on port ${chalk.bold.blue(config.PORT)}
    Environment: ${chalk.bold.green(process.env.NODE_ENV)}
    `);
  }
});

// Dev HMR setup
if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}

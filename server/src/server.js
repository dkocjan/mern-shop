import express from 'express';
import setMiddlewares from './config/middlewares';
import { router } from './api';

// Declare an app from express
const app = express();

// Set global middlewares
setMiddlewares(app);

// Set API routes
app.use('/api', router);

export default app;

import express from 'express';
import setMiddlewares from './config/middlewares';
import routes from './routes/';

// Declare an app from express
const app = express();

// Set global middlewares
setMiddlewares(app);

// Set API routes
app.use('/api', routes);

export default app;

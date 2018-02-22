import express from 'express';
import setMiddlewares from './middlewares';

// Declare an app from express
const app = express();

// Set global middlewares
setMiddlewares(app);

// catch all
app.all('*', (req, res) => {
  res.json({ ok: true });
});

export default app;

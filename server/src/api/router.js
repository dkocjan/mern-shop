import { Router } from 'express';

export const router = new Router();

// catch all
router.all('*', (req, res) => {
  res.json({ ok: true });
});

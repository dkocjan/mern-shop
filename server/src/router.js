import { Router } from 'express';

const router = new Router();

// catch all
router.all('*', (req, res) => {
  res.json({ ok: true });
});

export default router;

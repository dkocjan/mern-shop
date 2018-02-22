import express from 'express';

const router = new express.Router();

// catch all
router.all('*', (req, res) => {
  res.json({ ok: true });
});

export default router;

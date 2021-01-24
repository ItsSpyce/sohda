import express from 'express';

const router = express.Router();

router.use((req, res, next) => {});

router.get('/status', (req, res) => {
  res.json(true);
});

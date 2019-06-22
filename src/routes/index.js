import { Router } from 'express';
import models from '../models';

const router = Router();

router.post('/', async (req, res) => {
  const payload = await models.RouteChange.create(req.body);

  return res.send(payload);
});

export default router;

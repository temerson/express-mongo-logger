import { Router } from 'express';
import models from '../models';

const router = Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const payload = await models.RouteChange.create(req.body);

  return res.send(payload).status(201);
});

export default router;

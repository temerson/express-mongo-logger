import { Router } from 'express';
import uuidv4 from 'uuid/v4';
import models from '../models';

const router = Router();

router.post('/', async (req, res) => {
  const payload = await models.RouteChange.create({
    id: uuidv4(),
    ...req.body,
  });

  return res.send(payload);
});

export default router;

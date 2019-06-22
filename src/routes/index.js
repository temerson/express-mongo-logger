import { Router } from 'express';
import uuidv4 from 'uuid/v4';

const router = Router();

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    ...req.body,
  };

  return res.send(message);
});

export default router;

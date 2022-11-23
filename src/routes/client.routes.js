import { Router } from 'express';
import {
  createClient,
  deleteClient,
  getClient,
  getOneClient,
  updateClient,
} from '../controllers/client.controller.js';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
} from '../schemas/client.schema.js';

const router = Router();

router.get('/', getClient);
router.get('/:id', validatorHandler(getClientSchema, 'params'), getOneClient);

router.post('/', validatorHandler(createClientSchema, 'body'), createClient);
router.patch(
  '/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  updateClient
);
router.delete(
  '/:id',
  validatorHandler(getClientSchema, 'params'),
  deleteClient
);

export default router;

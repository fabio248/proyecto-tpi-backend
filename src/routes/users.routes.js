import { Router } from 'express';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from '../schemas/user.schema.js';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', validatorHandler(getUserSchema, 'params'), getUser);
router.post('/', validatorHandler(createUserSchema, 'body'), createUser);
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  updateUser
);
router.delete('/:id', validatorHandler(getUserSchema, 'params'), deleteUser);

export default router;

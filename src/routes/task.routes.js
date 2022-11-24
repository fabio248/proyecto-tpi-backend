import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getOneTask,
  getTasks,
  updateTask,
} from '../controllers/task.controller.js';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createTaskSchema,
  getTaskSchema,
  updateTaskSchema,
} from '../schemas/task.schema.js';

const router = Router();

router.get('/', getTasks);
router.get('/:id', validatorHandler(getTaskSchema, 'params'), getOneTask);

router.post('/', validatorHandler(createTaskSchema, 'body'), createTask);
router.patch(
  '/:id',
  validatorHandler(getTaskSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body'),
  updateTask
);
router.delete('/:id', validatorHandler(getTaskSchema, 'params'), deleteTask);

export default router;

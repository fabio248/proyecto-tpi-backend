import { Router } from 'express';
import {
  createMedidaHombreInferior,
  deleteMedidaHombreInferior,
  getMedidaHombreInferior,
  getMedidasHombreInferior,
  updateMedidaHombreInferior,
} from '../controllers/hombre-inferior.controller.js';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createHombreInferiorSchema,
  getHombreInferiorSchema,
  updateHombreInferiorSchema,
} from '../schemas/hombre-inferior.schema.js';

const router = Router();

router.get('/', getMedidasHombreInferior);
router.get(
  '/:id',
  validatorHandler(getHombreInferiorSchema, 'params'),
  getMedidaHombreInferior
);
router.post(
  '/',
  validatorHandler(createHombreInferiorSchema, 'body'),
  createMedidaHombreInferior
);
router.patch(
  '/:id',
  validatorHandler(getHombreInferiorSchema, 'params'),
  validatorHandler(updateHombreInferiorSchema, 'body'),
  updateMedidaHombreInferior
);

router.delete(
  '/:id',
  validatorHandler(getHombreInferiorSchema, 'params'),
  deleteMedidaHombreInferior
);

export default router;

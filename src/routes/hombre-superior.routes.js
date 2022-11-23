import { Router } from 'express';
import {
  createMedidaHombreSuperior,
  getMedidaHombreSuperior,
  updateMedidaHombreSuperior,
  getMedidasHombreSuperior,
  deleteMedidaHombreSuperior,
} from '../controllers/hombre-superior.controller.js';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createHombreSuperiorSchema,
  getHombreSuperiorSchema,
  updateHombreSuperiorSchema,
} from '../schemas/hombre-superior.schema.js';

const router = Router();

router.get('/', getMedidasHombreSuperior);
router.get(
  '/:id',
  validatorHandler(getHombreSuperiorSchema, 'params'),
  getMedidaHombreSuperior
);
router.post(
  '/',
  validatorHandler(createHombreSuperiorSchema, 'body'),
  createMedidaHombreSuperior
);
router.patch(
  '/:id',
  validatorHandler(getHombreSuperiorSchema, 'params'),
  validatorHandler(updateHombreSuperiorSchema, 'body'),
  updateMedidaHombreSuperior
);

router.delete(
  '/:id',
  validatorHandler(getHombreSuperiorSchema, 'params'),
  deleteMedidaHombreSuperior
);

export default router;

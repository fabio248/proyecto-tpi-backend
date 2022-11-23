import { Router } from 'express';
import {
  createMedidaMujerSuperior,
  deleteMedidaMujerSuperior,
  getMedidaMujerSuperior,
  getMedidasMujeresSuperior,
  updateMedidaMujerSuperior,
} from '../controllers/mujer-superior.controller.js';
import validatorHandler from '../middlewares/validator.handle.js';
import {
  createMujerSuperiorSchema,
  getMujerSuperiorSchema,
  updateMujerSuperiorSchema,
} from '../schemas/mujer-superior.schema.js';
const router = Router();

router.get('/', getMedidasMujeresSuperior);
router.get(
  '/:id',
  validatorHandler(getMujerSuperiorSchema, 'params'),
  getMedidaMujerSuperior
);
router.post(
  '/',
  validatorHandler(createMujerSuperiorSchema, 'body'),
  createMedidaMujerSuperior
);
router.patch(
  '/:id',
  validatorHandler(getMujerSuperiorSchema, 'params'),
  validatorHandler(updateMujerSuperiorSchema, 'body'),
  updateMedidaMujerSuperior
);

router.delete(
  '/:id',
  validatorHandler(getMujerSuperiorSchema, 'params'),
  deleteMedidaMujerSuperior
);

export default router;

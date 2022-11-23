import { Router } from 'express';
import {
  getMedidasMujeresInferior,
  getMedidaMujerInferior,
  createMedidaMujerInferior,
  deleteMedidaMujerInferior,
  updateMedidaMujerInferior,
} from '../controllers/mujer-inferior.controller.js';
import {
  getMujerInferiorSchema,
  createMujerInferiorSchema,
  updateMujerInferiorSchema,
} from '../schemas/mujer-inferior.schema.js';
import validatorHandler from '../middlewares/validator.handle.js';

const router = Router();
router.get('/', getMedidasMujeresInferior);
router.get(
  '/:id',
  validatorHandler(getMujerInferiorSchema, 'params'),
  getMedidaMujerInferior
);
router.post(
  '/',
  validatorHandler(createMujerInferiorSchema, 'body'),
  createMedidaMujerInferior
);
router.patch(
  '/:id',
  validatorHandler(getMujerInferiorSchema, 'params'),
  validatorHandler(updateMujerInferiorSchema, 'body'),
  updateMedidaMujerInferior
);

router.delete(
  '/:id',
  validatorHandler(getMujerInferiorSchema, 'params'),
  deleteMedidaMujerInferior
);

export default router;

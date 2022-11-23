import Joi from 'joi';

const hombro = Joi.string();
const largoBlusa = Joi.string();
const sisa = Joi.string();
const primerBoton = Joi.string();
const cintura = Joi.string();
const espalda = Joi.string();
const escote = Joi.string();
const talle = Joi.string();
const busto = Joi.string();
const manga = Joi.string();
const costado = Joi.string();
const cadera = Joi.string();
const id = Joi.string().uuid();
const clienteId = Joi.string().uuid();

const createMujerSuperiorSchema = Joi.object({
  clienteId: clienteId.required(),
  largoBlusa,
  escote,
  hombro,
  talle,
  busto,
  sisa,
  manga,
  costado,
  espalda,
  primerBoton,
  cintura,
  cadera,
});

const createMujerSuperiorFromClientSchema = Joi.object({
  id: id.required(),
  largoBlusa,
  escote,
  hombro,
  talle,
  busto,
  sisa,
  manga,
  costado,
  espalda,
  primerBoton,
  cintura,
  cadera,
});

const getMujerSuperiorSchema = Joi.object({
  id: id.required(),
});

const updateMujerSuperiorSchema = Joi.object({
  largoBlusa,
  escote,
  hombro,
  talle,
  busto,
  sisa,
  manga,
  costado,
  espalda,
  primerBoton,
  cintura,
  cadera,
  clienteId,
});

export {
  createMujerSuperiorFromClientSchema,
  createMujerSuperiorSchema,
  getMujerSuperiorSchema,
  updateMujerSuperiorSchema,
};

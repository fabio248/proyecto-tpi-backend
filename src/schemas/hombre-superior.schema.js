import Joi from 'joi';

const hombro = Joi.string();
const largoCamisa = Joi.string();
const anchoCuello = Joi.string();
const talleFrente = Joi.string();
const frentePecho = Joi.string();
const talleEspalda = Joi.string();
const bocaManga = Joi.string();
const sisaCamisa = Joi.string();
const primerBoton = Joi.string();
const largoManga = Joi.string();
const hombroACodo = Joi.string();
const anchoBrazo = Joi.string();
const cintura = Joi.string();
const espalda = Joi.string();
const cadera = Joi.string();
const clienteId = Joi.string().uuid();
const id = Joi.string().uuid();

const createHombreSuperiorSchema = Joi.object({
  clienteId: clienteId.required(),
  hombro,
  largoCamisa,
  anchoCuello,
  talleEspalda,
  talleFrente,
  frentePecho,
  bocaManga,
  sisaCamisa,
  primerBoton,
  largoManga,
  hombroACodo,
  anchoBrazo,
  cintura,
  espalda,
  cadera,
});
const createHombreSuperiorFromClientSchema = Joi.object({
  id: id.required(),
  hombro,
  largoCamisa,
  anchoCuello,
  talleEspalda,
  talleFrente,
  frentePecho,
  bocaManga,
  sisaCamisa,
  primerBoton,
  largoManga,
  hombroACodo,
  anchoBrazo,
  cintura,
  espalda,
  cadera,
});
const getHombreSuperiorSchema = Joi.object({
  id: id.required(),
});

const updateHombreSuperiorSchema = Joi.object({
  hombro,
  largoCamisa,
  anchoCuello,
  talleEspalda,
  talleFrente,
  frentePecho,
  bocaManga,
  sisaCamisa,
  primerBoton,
  largoManga,
  hombroACodo,
  anchoBrazo,
  cintura,
  espalda,
  cadera,
  clienteId,
});

export {
  createHombreSuperiorSchema,
  getHombreSuperiorSchema,
  updateHombreSuperiorSchema,
  createHombreSuperiorFromClientSchema,
};

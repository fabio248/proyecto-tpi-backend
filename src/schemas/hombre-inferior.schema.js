import Joi from 'joi';

const id = Joi.string().uuid();
const largoPantalon = Joi.string();
const cadera = Joi.string();
const anchoRodilla = Joi.string();
const anchoTobillo = Joi.string();
const cinturaARodilla = Joi.string();
const tiro = Joi.string();
const clienteId = Joi.string().uuid();

const createHombreInferiorSchema = Joi.object({
  clienteId: clienteId.required(),
  largoPantalon,
  cadera,
  anchoRodilla,
  anchoTobillo,
  cinturaARodilla,
  tiro,
});
const createHombreInferiorFromClientSchema = Joi.object({
  id: id.required(),
  largoPantalon,
  cadera,
  anchoRodilla,
  anchoTobillo,
  cinturaARodilla,
  tiro,
});
const getHombreInferiorSchema = Joi.object({
  id: id.required(),
});

const updateHombreInferiorSchema = Joi.object({
  largoPantalon,
  cadera,
  anchoRodilla,
  anchoTobillo,
  cinturaARodilla,
  tiro,
});

export {
  createHombreInferiorSchema,
  getHombreInferiorSchema,
  updateHombreInferiorSchema,
  createHombreInferiorFromClientSchema,
};

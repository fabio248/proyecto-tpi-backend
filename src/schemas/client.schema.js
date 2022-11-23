import Joi from 'joi';
import { createHombreInferiorFromClientSchema } from './hombre-inferior.schema.js';
import { createHombreSuperiorFromClientSchema } from './hombre-superior.schema.js';
import { createMujerInferiorFromClientSchema } from './mujer-inferior.schema.js';
import { createMujerSuperiorFromClientSchema } from './mujer-superior.schema.js';

const id = Joi.string().uuid();
const firstName = Joi.string().min(3);
const secondName = Joi.string().min(3);
const firstLastName = Joi.string().min(3);
const secondLastName = Joi.string().min(3);
const thirdLastName = Joi.string().min(3);
const email = Joi.string().email();
const gender = Joi.string();
const phone = Joi.string();

const createClientSchema = Joi.object({
  firstName: firstName.required(),
  firstLastName: firstLastName.required(),
  phone: phone.required(),
  gender: gender.required(),
  secondName,
  secondLastName,
  thirdLastName,
  email,
  medidaParteSuperiorHombre: createHombreSuperiorFromClientSchema,
  medidaParteInferiorHombre: createHombreInferiorFromClientSchema,
  medidasParteSuperiorMujer: createMujerSuperiorFromClientSchema,
  medidasParteInferiorMujer: createMujerInferiorFromClientSchema,
});

const updateClientSchema = Joi.object({
  firstName,
  secondName,
  firstLastName,
  secondLastName,
  thirdLastName,
  email,
  phone,
});

const getClientSchema = Joi.object({
  id: id.required(),
});

export { createClientSchema, updateClientSchema, getClientSchema };

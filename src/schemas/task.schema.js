import Joi from 'joi';

const id = Joi.string().uuid();
const type = Joi.string();
const fechaEntrega = Joi.string();
const clienteId = Joi.string().uuid();

const createTaskSchema = Joi.object({
  type: type.required(),
  fechaEntrega: fechaEntrega.required(),
  clienteId: clienteId.required(),
});

const getTaskSchema = Joi.object({
  id: id.required(),
});
const updateTaskSchema = Joi.object({
  type,
  fechaEntrega,
  clienteId,
});

export { createTaskSchema, getTaskSchema, updateTaskSchema };

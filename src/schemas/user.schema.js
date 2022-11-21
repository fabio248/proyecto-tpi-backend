import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().alphanum().min(6);
const role = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateUserSchema = Joi.object({
  name,
  lastName,
  email: email,
  password: password,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

export { createUserSchema, updateUserSchema, getUserSchema };

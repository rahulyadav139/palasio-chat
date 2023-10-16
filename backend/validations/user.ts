import joi from 'joi';

export const createUserSchema = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

export const loginUserSchema = joi.object({
  email: joi.string(),
  password: joi.string(),
});

export default { createUserSchema, loginUserSchema };

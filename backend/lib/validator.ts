import joi, { Schema } from 'joi';

export const validator = (schema: Schema, data: any) => {
  const { value, error } = schema.validate(data);

  if (error) {
    throw error;
  }

  return value;
};

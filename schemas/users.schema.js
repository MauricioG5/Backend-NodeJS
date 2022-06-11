const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(5).max(25);
const lastName = Joi.string().min(5).max(25);
const address = Joi.string().min(5).max(25);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(5).max(25);

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  password: password.required(),
  address: address
});

const getUserSchema = Joi.object({
  id: id.required()
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  password: password,
  address: address
});


module.exports = { createUserSchema, getUserSchema, updateUserSchema }

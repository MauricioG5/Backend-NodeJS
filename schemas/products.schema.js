const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const img = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: name.required(),
  img: img.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  img: img
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}

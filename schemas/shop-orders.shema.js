const Joi = require('joi');

// const shopOrder = {
//   'id': faker.datatype.uuid(),
//   'productName': faker.commerce.productName(),
//   'productPrice': faker.commerce.price(),
//   'productColor': faker.commerce.color(),
//   'qty': faker.datatype.number(10),
//   'user': faker.name.findName()
// };

const id = Joi.string().uuid();
const productId = Joi.string().uuid();
const productName = Joi.string().min(5).max(50);
const productPrice = Joi.number().min(1).max(1000);
const productColor = Joi.string().min(5).max(10);
const qty = Joi.number().min(1).max(20);
const userId = Joi.string().uuid();
const username = Joi.string().min(2).max(20);
const userAddress = Joi.string().min(10).max(20);

const createShopOrderSchema = Joi.object({
  productId: productId.required(),
  productName: productName.required(),
  productPrice: productPrice.required(),
  productColor,
  qty: qty.required(),
  userId: userId.required(),
  username: username.required(),
  userAddress: userAddress.required()
});

const updateShopOrderSchema = Joi.object({
  qty,
  userAddress,
  productColor
});

const getShopOrderSchema = Joi.object({
id: id.required()
});

module.exports = { getShopOrderSchema, updateShopOrderSchema, createShopOrderSchema };

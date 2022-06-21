// Import as many models as you have
const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { ShopOrder, ShopOrderSchema } = require('./shop-order.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  ShopOrder.init(ShopOrderSchema, ShopOrder.config(sequelize));
}

module.exports = setupModels;

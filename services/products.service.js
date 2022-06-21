const faker = require("faker");
const boom = require('@hapi/boom');
const pool = require('../libs/sequelize');
const sequelize = require('./../libs/sequelize');

class ProductsService {

  constructor() {
    this.products = [];
    // this.sequelize = sequelize;
    this.generate();
    }

  async generate() {
    const limit = 100;
    this.lastIndex;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        // id: index,
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: index % 2 == 0 ? true : false
      });
      this.lastIndex = index;
    }
  }

  async create(changes) {
    const newProduct = {
      'id': faker.datatype.uuid(),
      ...changes
    }
    this.products.push(newProduct);
    return newProduct;

  }

  async find() {
    const query = 'SELECT * FROM task';
    const [data, metadata] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    // const name = this.getTotal();

    const found = this.products.find(item => item.id == id);
    if (!found) {
      throw boom.notFound('Product not found');
    }
    if (found.isBlocked) {
      throw boom.conflict('product is blocked');
    }
    return found;
  }


  async update(id, changes) {
    const index = this.products.findIndex(item => item.id == id);
    let easyProduct = this.products.find(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    console.table(easyProduct);
    this.products[index] = {
      ...easyProduct,
      ...changes
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;

const faker = require('faker');

class ShopOrdersService {

  constructor() {
    this.shopOrders = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      const shopOrder = {
        'id': faker.datatype.uuid(),
        'productId': faker.datatype.uuid(),
        'productName': faker.commerce.productName(),
        'productPrice': faker.commerce.price(),
        'productColor': faker.commerce.color(),
        'qty': faker.datatype.number(10),
        'user': faker.name.findName()
      };
      this.shopOrders.push(shopOrder);
    }
  }

  async create(shopOrder) {
    try {
      const newShopOrder = {
        id: faker.datatype.uuid(),
        ...shopOrder
      }
      this.shopOrders.push(newShopOrder);
      return newShopOrder;
    } catch (e) {
      return { message: e.message }
    };
  }

  async update(id, changes) {
    const index = this.shopOrders.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Shop Order not found');
    }
    const shopOrder = this.shopOrders[index];
    const newShopOrder = {
      ...shopOrder,
      ...changes
    }
    this.shopOrders[index] = newShopOrder;
    return newShopOrder;
  }

  async find() {
    return this.shopOrders;
  }

  async findOne(id) {
    const found = this.shopOrders.find(item => item.id == id);
    if (!found) {
      throw boom.notFound('Shop Order not found');
    }
    return found;
  }

  async delete(id) {
    const index = this.shopOrders.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Shop Order not found');
    }
    this.shopOrders.splice(index, 1)
    return { id }
  }
}

module.exports = ShopOrdersService;

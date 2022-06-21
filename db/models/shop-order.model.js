const { Model, DataTypes, Sequelize } = require('sequelize');

const SO_TABLE = 'shop-orders';

const ShopOrderSchema = {
  /*
          'id': faker.datatype.uuid(),
        'productId': faker.datatype.uuid(),
        'productName': faker.commerce.productName(),
        'productPrice': faker.commerce.price(),
        'productColor': faker.commerce.color(),
        'qty': faker.datatype.number(10),
        'user': faker.name.findName()
  */
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId: {
    defaultValue: 1,
    allowNull:false,
    field: 'product-id',
    type: DataTypes.INTEGER,
  },
  productPrice: {
    allowNull: false,
    field: 'product-price',
    type: DataTypes.INTEGER
  },
  productColor: {
    type: DataTypes.STRING,
    field: 'product-color',
    defaultValue: Sequelize.NOW
  },
  qty: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}

class ShopOrder extends Model{
  static associate(){
    // associate relations of db
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: SO_TABLE,
      modelName: 'ShopOrder',
      timestamps: false
    }
  }
}

module.exports = { SO_TABLE, ShopOrderSchema,  ShopOrder }

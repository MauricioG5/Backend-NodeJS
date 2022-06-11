const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {

  }

  async create(newUser) {
    const user = {
      id: faker.datatype.uuid(),
      ...newUser
    }
    this.users.push(user);
    return user;
  }


  async find() {
    return this.users;
  }

  async findOne(id) {
    const index = this.users.findIndex(item => item.id == id);
    if (index === -1) {
      // throw boom.notFound('User not found');
      console.log('No se encontro el usuario');
      throw boom.notFound();
    }
    const found = this.users[index];
    return found;
  }

  async update(id, changes) {

    const index = this.users.findIndex(item => item.id == id);
    if (index === -1) {
      // throw boom.notFound('User not found');
      console.log('No se encontro el usuario');
    }
    const foundUser = this.users[index];
    const newUser = {
      ...foundUser,
      ...changes
    }
    this.users[index] = newUser;
    return newUser;
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id == id);
    if (index === -1) {
      // throw boom.notFound('User not found');
      console.log('No se encontro el usuario');
    }
    const deleted = this.users[index];
    this.users.splice(index, 1);
    return deleted;

  }

}

module.exports = UsersService;

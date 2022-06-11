const { notFound } = require("@hapi/boom");
const faker = require("faker");

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  async generate() {
    const limit = 5;
    this.lastIndex;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.random.word()
      });
      this.lastIndex = index;
    }
  }

  async create(changes) {
    const newCategory = {
      'id': faker.datatype.uuid(),
      ...changes
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 2000);
    })
    return this.categories;
  }

  async findOne(id) {
    const found = this.categories.find(item => item.id == id);
    if(!found){
      throw boom.notFound('Category not found');
    }
      return found;

  }

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id == id);
    let easyCategory = this.categories.find(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');    }
    console.table(easyCategory);
    this.categories[index] = {
      ...easyCategory,
      ...changes
    }
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }

}

module.exports = CategoriesService;

'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: async (queryInterface) => {
    for (let i = 0; i < 30; i++) {
      await queryInterface.bulkInsert('articles', [{
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
        body: faker.lorem.paragraph(),
        categoryId: Math.ceil(Math.random() * 10),
        userId: Math.ceil(Math.random() * 10)
      }], {});
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('articles', null, {});
  }
};

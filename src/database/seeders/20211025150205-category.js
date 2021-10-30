'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: async (queryInterface) => {
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('categories', [{
        title: faker.lorem.sentence(),
        slug: faker.lorem.slug(),
        description: faker.lorem.paragraph(),
      }], {});    
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};

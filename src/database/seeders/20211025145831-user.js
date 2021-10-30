'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker/locale/pt_BR');

module.exports = {
  up: async (queryInterface) => {
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('users', [
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: bcrypt.hashSync('1234', 10),
        }
      ], {});
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

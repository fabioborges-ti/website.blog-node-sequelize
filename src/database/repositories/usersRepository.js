'use strict';

const { users } = require('../../models');

async function getUsersAsync() {
  return await users.findAll({
    order: [
      ['id', 'DESC']
    ]
  });
};

async function getUserById(id) {
  return await users.findByPk(id);
};

async function getUserByEmailAsync(email) {
  return await users.findOne({
    where: {
      email: email
    }
  });
};

async function createUserAsync(name, email, password) {
  return await users.create({
    name: name,
    email: email,
    password: password
  });
};

async function updateUserAsync(id, name, email) {

  return await users.update({ name: name, email: email }, { where: { id: id } });

};

async function removeUserAsync(id) {
  return await users.destroy({ where: { id: id } });
};

module.exports = { 
  getUsersAsync, 
  getUserById, 
  getUserByEmailAsync, 
  createUserAsync, 
  updateUserAsync, 
  removeUserAsync 
};

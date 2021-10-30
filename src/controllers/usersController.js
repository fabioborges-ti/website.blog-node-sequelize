'use strict';

const validator = require('validator');
const bcrypt = require('bcrypt');
const usersRepository = require('../database/repositories/usersRepository');
const sendEmail = require('../utils/sendEmail');

async function list(req, res) {

  const users = await usersRepository.getUsersAsync();

  res.render('./users/', {
    users: users
  });

};

async function create(req, res) {
  res.render('./users/create', {
    action: './create/save',
    data: null,
    errors: null,
  });
};

async function createSave(req, res) {

  const { name, email } = req.body;

  const errors = [];

  if (validator.isEmpty(name)) {
    errors.push('Campo nome é obrigatório');
  }

  if (!validator.isLength(name, { min:3, max: 100 })) {
    errors.push('Campo nome deve ter mínimo de 3 e máximo de 100 caracteres');
  }

  if (!validator.isEmail(email)) {
    errors.push('E-mail inválido');
  }

  if (errors.length > 0) {

    res.render('./users/create', {
      action: '../create/save',
      data: {
        name: name,
        email: email,
      },
      errors: errors,
    });

    return;

  }

  const user = await usersRepository.getUserByEmailAsync(email);

  if (user) {
    res.render('./users/create', {
      action: '../create/save',
      data: {
        name: name,
        email: email,
      },
      errors: "E-mail já cadastrado na base",
    });
  
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync('1234', salt);

  await usersRepository.createUserAsync(name, email, password);

  await sendEmail('fbnascime@gmail.com');

  res.redirect("../");

};

async function edit(req, res) {

  let { id } = req.params;

  if (isNaN(id)) {
    res.redirect('../../users');
    return;
  }

  var user = await usersRepository.getUserById(id);

  if (!user) {
    res.redirect('../../users');
    return;
  }

  res.render('./users/edit', {
    user: user
  });

};

async function editSave(req, res) {

  const { userId, name, email } = req.body;

  if (name === '' || email === '') {
    res.redirect('../../users?codError=1');
    return;
  }

  const user = await usersRepository.getUserById(userId);

  if (!user) {
    res.redirect('../');
    return;
  }

  await usersRepository.updateUserAsync(userId, name, email);

  res.redirect('../');

};

async function remove(req, res) {

  const { id } = req.params;

  await usersRepository.removeUserAsync(id);

  res.redirect('../');

};

async function auth(req, res) {

  const email = req.body.email;
  const password = req.body.password;

  const user = await usersRepository.getUserByEmailAsync(email);

  if (!user) {
    res.redirect('../login?codError=1');
    return;
  }

  var exists = bcrypt.compareSync(password, user.password);

  if (!exists) {
    req.session.user = undefined;
    res.redirect('../login?codError=1');
    return;
  }

  req.session.user = {
    connected: true,
    id: user.id,
    email: user.email,
  };

  res.redirect('../login?connect=ok');

};

async function login(req, res) {
  res.render('./users/login');
};

async function logout(req, res) {

  req.session.user = undefined;
  res.redirect('../../?connect=off');

};

module.exports = { list, create, createSave, edit, editSave, remove, login, logout, auth };

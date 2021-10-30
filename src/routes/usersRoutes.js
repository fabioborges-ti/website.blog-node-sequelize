'use strict';

const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const Auth = require('../middleware/auth');

router.get('/', usersController.list);
router.get('/create', usersController.create);
router.post('/create/save', usersController.createSave);
router.get('/edit/:id', usersController.edit);
router.post('/edit/save', usersController.editSave);
router.get('/remove/:id', usersController.remove);
router.get('/login', usersController.login);
router.post('/login/auth', usersController.auth);
router.get('/logout', usersController.logout);

module.exports = router;

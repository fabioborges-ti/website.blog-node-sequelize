'use strict';

const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categoriesController');

//const Auth = require('../middleware/auth');

router.get('/', categoriesController.list);
router.get('/create', categoriesController.create);
router.get('/:slug', categoriesController.listBySlug);
router.post('/create/save', categoriesController.createSave);
router.get('/edit/:id', categoriesController.edit);
router.post('/edit/save', categoriesController.editSave);
router.get('/remove/:id', categoriesController.remove);

module.exports = router;

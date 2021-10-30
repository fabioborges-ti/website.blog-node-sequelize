'use strict';

const express = require('express');
const router = express.Router();

//const Auth = require('../middleware/auth');

const articlesController = require('../controllers/articlesController');

router.get('/', articlesController.list);
router.get('/create', articlesController.create);
router.post('/create/save', articlesController.createSave);
router.get('/edit/:id', articlesController.edit);
router.post('/edit/save', articlesController.editSave);
router.get('/remove/:id', articlesController.remove);
router.get('/:slug', articlesController.show);
//router.get('/page/:num', articlesController.paging);

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.list);

module.exports = router;

'use strict';

const express = require('express');
const expressSession = require('express-session');

const app = express();
const path = require('path');

const homeRoutes = require('../src/routes/homeRoutes');
const articlesRoutes = require('../src/routes/articlesRoutes');
const categoriesRoutes = require('../src/routes/categoriesRoutes');
const usersRoutes = require('../src/routes/usersRoutes');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(expressSession({
  secret: 'DNzIUngH/UiF8JIohFLDBQ==', 
  saveUninitialized: true, 
  resave: false,
  cookie: {
    maxAge: 3600000,
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', homeRoutes);  
app.use('/home', homeRoutes);
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);

module.exports = app;

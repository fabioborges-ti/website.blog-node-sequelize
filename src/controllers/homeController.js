'use strict';

const articlesRepository = require('../database/repositories/articlesRepository');
const categoriesRepository = require('../database/repositories/categoriesRepository');

async function list(req, res) {

  const articles = await articlesRepository.getArticlesAsync();

  const categories = await categoriesRepository.getCategoriesAsync();

  res.render('./home', {
    articles: articles,
    categories: categories
  });

};

module.exports = { list };

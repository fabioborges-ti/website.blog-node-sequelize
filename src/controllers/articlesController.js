'use strict';

const articlesRepository = require('../database/repositories/articlesRepository');
const categoriesRepository = require('../database/repositories/categoriesRepository');

const slugify = require('slugify');

async function list(req, res) {

  const data = await articlesRepository.getArticlesAsync();

  res.render('./articles/', {
    articles: data
  });

};

async function create(req, res) {

  const listCategories = await categoriesRepository.getCategoriesAsync();

  res.render('./articles/create', {
    categories: listCategories
  });

};

async function createSave(req, res) {

  const { title, content, categoryId } = req.body;

  const slug = slugify(title, { lower: true, trim: true });

  const userId = 1;

  await articlesRepository.createArticleAsync(title, slug, content, categoryId, userId);

  res.redirect('../');

};

async function edit(req, res) {

  const { id } = req.params;

  if (isNaN(id)) {
    res.redirect('../?codError=1');
    return;
  }

  const article = await articlesRepository.getArticleById(id);

  if (!article) {
    res.redirect('../?codError=1');
    return;
  }

  const categories = await categoriesRepository.getCategoriesAsync();

  res.render('./articles/edit', {
    categories: categories,
    article: article
  });

};

async function editSave(req, res) {

  const { articleId, title, content, categoryId } = req.body;

  const article = await articlesRepository.getArticleById(articleId);

  if (!article) {
    res.redirect('../');
    return;
  }

  const userId = 1;

  const slug = slugify(title, { lower: true, trim: true });

  await articlesRepository.updateArticleAsync(articleId, title, slug, content, categoryId, userId);

  res.redirect('../');

};

async function remove(req, res) {

  const { id } = req.params;

  await articlesRepository.removeArticleAsync(id);

  res.redirect('../');

};

async function show(req, res) {

  const { slug } = req.params;

  const article = await articlesRepository.getArticleBySlug(slug);

  if (!article) {
    res.redirect("../home/?codError=1");
    return;
  }

  const listCategories = await categoriesRepository.getCategoriesAsync();

  res.render('./home/article', {
    article: article,
    categories: listCategories
  });

};

module.exports = { list, create, createSave, edit, editSave, remove, show };

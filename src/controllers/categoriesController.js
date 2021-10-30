'use strict';

const categoriesRepository = require('../database/repositories/categoriesRepository');
const articlesRepository = require('../database/repositories/articlesRepository');

const slugify = require('slugify');

async function list(req, res) {

  const listCategories = await categoriesRepository.getCategoriesAsync();

  res.render('./categories/', {
    categories: listCategories
  });

};

async function listBySlug(req, res) {

  const { slug } = req.params;

  const category = await categoriesRepository.getCategoriesBySlug(slug);

  if (!category) {
    res.redirect("../");
    return;
  }

  const articles = await articlesRepository.getArticlesByCategoryId(category.id);

  const categories = await categoriesRepository.getCategoriesAsync();

  res.render('./home', {
    articles: articles,
    categories: categories,
  });

};

async function create(req, res) {
  res.render('./categories/create');
};

async function createSave(req, res) {

  const { title, description } = req.body;

  if (title === '' || description === '') {
    res.redirect('../create');
  }

  const slug = slugify(title, { lower: true, trim: true });

  await categoriesRepository.createCategoryAsync(title, slug, description);

  res.redirect("../");

};

async function edit(req, res) {

  const { id } = req.params;

  if (isNaN(id)) {
    res.redirect('../?codError=1');
    return;
  }

  const category = await categoriesRepository.getCategoryById(id);

  if (!category) {
    res.redirect('../');
    return;
  }

  res.render('./categories/edit', {
    category: category
  });

};

async function editSave(req, res) {

  const { categoryId, title, description } = req.body;

  if (isNaN(categoryId)) {
    res.redirect('../');
    return;
  }

  const slug = slugify(title, { lower: true, trim: true });

  const category = await categoriesRepository.getCategoryById(categoryId);

  if (!category) {
    res.redirect('../');
    return;
  }

  await categoriesRepository.updateCategoryAsync(categoryId, title, slug, description);

  res.redirect('../');

};

async function remove(req, res) {

  const { id } = req.params;

  await categoriesRepository.removeCategoryAsync(id);

  res.redirect('../');

};

module.exports = { list, listBySlug, create, createSave, edit, editSave, remove };

'use strict';

const { categories } = require('../../models');

async function getCategoriesAsync() {
  return await categories.findAll({ order: [['id', 'DESC']] });
};

async function getCategoryById(id) {
  return await categories.findByPk(id);
};

async function getCategoriesBySlug(slug) {
  return await categories.findOne({ where: { slug: slug } });
};

async function createCategoryAsync(title, slug, description) {
  return await categories.create({ title: title, slug: slug, description: description });
};

async function updateCategoryAsync(id, title, slug, description) {
  return await categories
                .update({ title: title, slug: slug, description: description }, 
                  { where: 
                    { id: id }
                  });
};

async function removeCategoryAsync(id) {
  return await categories.destroy({ where: { id: id } });
};

module.exports = { 
  getCategoriesAsync, 
  getCategoryById, 
  getCategoriesBySlug, 
  createCategoryAsync,
  updateCategoryAsync,
  removeCategoryAsync
};

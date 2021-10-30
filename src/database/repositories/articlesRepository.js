'use strict';

const { articles } = require('../../models');
const { categories } = require('../../models');
const { users } = require('../../models');

async function getArticlesAsync() {
  return await articles.findAll(
    {
      order: [['id', 'DESC']],
      include: [{
        model: categories,
        as: 'categories'
      },
      {
        model: users,
        as: 'users'
      }],
    }
  )
};

async function getArticleById(id) {
  return await articles.findByPk(id);
};

async function getArticlesByCategoryId(id) {
  return await articles.findAll({ where: { categoryId: id } });
};

async function getArticleBySlug (slug) {
  return await articles.findOne({ where: { slug: slug } });
};

async function createArticleAsync (title, slug, body, categoryId, userId) {
  return await articles.create({ title: title, slug: slug, body: body, categoryId: categoryId, userId: userId});
}

async function updateArticleAsync (id, title, slug, body, categoryId, userId) {
  return await articles
                .update({ title: title, slug: slug, body: body, categoryId: categoryId, userId: userId }, 
                        { where: {  
                            id: id
                          }
                        });
};

async function removeArticleAsync (id) {
  return await articles.destroy({ where: { id: id } });
};

module.exports = { 
  getArticlesAsync, 
  getArticleById, 
  getArticlesByCategoryId, 
  getArticleBySlug,
  createArticleAsync,
  updateArticleAsync,
  removeArticleAsync
};

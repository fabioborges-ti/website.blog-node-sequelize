'use strict';

module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('articles', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    body: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {

  });

  article.associate = function(models) {
    
    article.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      as: 'categories'
    });
    
    article.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'users'
    });
  };

  return article;
};

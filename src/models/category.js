'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const category = sequelize.define('categories', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});

  category.associate = function(models) {
    // associations can be defined here
  };
  
  return category;
  
};

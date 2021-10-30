'use strict';

module.exports = (sequelize, DataTypes) => {

  const user = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {});

  user.associate = function(models) {
    // associations can be defined here
  };

  return user;
  
};

'use strict';

require('dotenv').config();

const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT;

module.exports = {
  dialect: dialect,
  host: host,
  database: database,
  username: username,
  password: password,
  define: {
    timestamps: false,
    underscored: false,
    underscoredAll: false,
  },
  timezone: '-03:00',
};

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('carrosdb', 'root', 'Andrea123', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;

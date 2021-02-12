const { Sequelize } = require('sequelize');

module.exports = new Sequelize('asteriskcdrdb', 'cdruser', '3Nar5Wer', {
  host: 'localhost',
  dialect: 'mariadb'
});
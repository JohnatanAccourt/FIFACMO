const sequelize = require('sequelize');

const connection = new sequelize('FIFAMALL', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = connection;
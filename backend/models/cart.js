/* jshint indent: 2 */
const connection = require('../database/database');
const DataTypes = require("sequelize");

const cart = connection.define("cart", {
    cart_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sofifa_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'players',
        key: 'sofifa_id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'team_id'
      }
    }
  }, {
    tableName: 'cart',
    timestamps: false,
  });

  module.exports = cart;

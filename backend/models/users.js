/* jshint indent: 2 */
const connection = require('../database/database');
const DataTypes = require("sequelize");

const users = connection.define("users", {
    user_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_user: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    password_user: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    name_img: {
      type: DataTypes.STRING(100),
    }
  }, {
    tableName: 'users',
    timestamps: false,
  });

  users.associate = (database) => {
    database.users.belongsTo(database.teams, {as: "teams", foreignKey: 'user_id' })
  }

  module.exports = users;

/* jshint indent: 2 */
const connection = require('../database/database');
const DataTypes = require("sequelize");

const teams = connection.define("teams", {
    team_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_team: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    budget: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '100000000'
    },
    user_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    sofifa_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'players',
        key: 'sofifa_id'
      }
    },
    leagues:{
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    cups:{
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    team_img: {
      type: DataTypes.STRING(100),
    },
    defense:{
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    midfield:{
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    attack:{
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
  }, {
    tableName: 'teams',
    timestamps: false,
    
  });

  teams.associate = (database) => {
    database.teams.belongsTo(database.users, {as: "teams", foreignKey: 'user_id' })
  }

  module.exports = teams;
  



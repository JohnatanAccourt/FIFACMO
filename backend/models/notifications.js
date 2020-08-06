/* jshint indent: 2 */
const connection = require('../database/database');
const DataTypes = require("sequelize");
const sequelize = require('sequelize');

const notifications = connection.define("notifications", {
    notifications_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    propose_value:{
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    message:{
      type: DataTypes.STRING(255),
      allowNull: false
    },
    team_id_received:{
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    team_id_sent:{
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    player_id:{
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    team_img:{
      type: DataTypes.STRING(255),
    },
    allow_btn:{
      type: DataTypes.STRING(7),
      defaultValue: 'false'
    },
    notification_read:{
      type: DataTypes.STRING(7),
      defaultValue: 'false'
    },
    notification_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    team_name:{
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    player_value:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    player_name:{
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  }, {
    tableName: 'notifications',
    timestamps: false,
  });

  module.exports = notifications

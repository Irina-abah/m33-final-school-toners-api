const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

  const User = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  
  module.exports = User;
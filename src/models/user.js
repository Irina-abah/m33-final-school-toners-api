const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

  const User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  
  module.exports = User;
const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

module.exports = (DataTypes , sequelize) => {
  const User = sequelize.define('user', {
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
  return User;
  };
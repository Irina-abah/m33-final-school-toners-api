const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Toners = require("./toner");

const Schools = sequelize.define('Schools', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printer_model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printer_type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Schools.hasMany(Toners);

module.exports = Schools;
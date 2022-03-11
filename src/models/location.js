const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Toners = require("./toner")

const Locations = sequelize.define("Locations", {
  location_name: {
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
  },
})

Locations.hasMany(Toners);

module.exports = Locations;


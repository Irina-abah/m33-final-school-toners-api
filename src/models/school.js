const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Locations = require("./location");

const Schools = sequelize.define("schools", {
  school_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Schools.hasMany(Locations);

module.exports = Schools;
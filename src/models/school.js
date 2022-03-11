const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Toner = require("./toner");

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

  Schools.hasMany(Toner);


// Schools.associate = (models) => {
//   Schools.hasMany(models.Toners, { as: "Toners"})
// }

// Schools.associate = (models) => {
//   Schools.hasMany(models.Toners, {primaryKey: "school_id"})
// }

module.exports = Schools;
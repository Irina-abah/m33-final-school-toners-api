const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

module.exports = (DataTypes , sequelize) => {
  const School = sequelize.define('school', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
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
    }
  })
  return School;
  };
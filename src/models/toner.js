const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

module.exports = (DataTypes , sequelize) => {
  const Toner = sequelize.define('toner', {
    toner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toners: [{
      type: DataTypes.STRING,
      allowNull: false,
    }],
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
  return Toner;
  };
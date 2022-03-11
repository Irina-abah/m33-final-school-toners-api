const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

  const Toners = sequelize.define('Toners', {
    toner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // schoolId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // }
  })

  //  Toners.associate = (models) => {
  //   Toners.hasMany(models.Schools);
  // }

  // Toners.associate = (models) => {
  //   Toners.hasMany(models.Schools, {foreignKey: "school_id", as : "school_id"});
  // }

module.exports = Toners;

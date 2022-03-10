const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

  const Toners = sequelize.define('Toners', {
    toner_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
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
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  Toners.associate = function(models){
    Toners.belongsToMany(models.Schools,
    {foreignKey: "school_id", as : "school_id"})
  }


module.exports = Toners;

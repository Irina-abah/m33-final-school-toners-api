const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const { Toners } = require("./toner")

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
  },
  // toner_id:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
});

Schools.associate = function(models){
  Schools.belongsToMany(models.Toners,
  {foreignKey: "toner_id", as : "toner_id"})
}

module.exports = Schools;
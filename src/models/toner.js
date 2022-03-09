const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

  const Toners = sequelize.define('Toners', {
    toner_name: [{
      type: DataTypes.STRING,
      allowNull: false,
    }],
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    printer: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  Toners.associate = (models) => {
    Toners.belongsToMany(models.Schools, { through: 'SchoolToners' })
  }

module.exports = Toners;

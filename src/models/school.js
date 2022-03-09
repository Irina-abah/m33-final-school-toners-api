const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Schools = sequelize.define('Schools', {
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
  },
  printer_type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Schools.associate = (models) => {
  Schools.belongsToMany(models.Toners, { through: 'SchoolToners' })
}

module.exports = Schools;
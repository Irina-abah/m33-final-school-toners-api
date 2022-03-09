const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const Schools = require("./school");
const Toners = require("./toner");

const SchoolToners = sequelize.define("SchoolToners", {
  schoolId: {
    type: DataTypes.INTEGER,
    references: {
      model: Schools, // 'Movies' would also work
      key: 'id'
    }
  },
  toner: [{
    type: DataTypes.INTEGER,
    references: {
      model: Toners, // 'Movies' would also work
      key: 'printer'
    }
  }]
})

module.exports = SchoolToners
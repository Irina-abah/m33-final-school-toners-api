require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

try {
  sequelize.authenticate();
} catch (error) {
  console.log(error);
}

module.exports = sequelize;

require('dotenv').config();
const {Sequelize} = require("sequelize");
const School = require("../models/school");

const sequelize = new Sequelize(process.env.DB_HOST);

sequelize.authenticate()
.then(() => console.log("Connected to db"))
.catch((err) => console.log(err));

// School.sync()
// .then(result => {
//   console.log(result);
// })
// .catch(err => {
//   console.log(err);
// })

module.exports = sequelize;
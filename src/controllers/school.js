const sequelize = require("../db/connection");
const School = require("../models/school");
const Toner = require("../models/toner");

exports.addSchool = (req, res) => {
  const {
    name,
    location,
    printer_model,
    printer_type
  } = req.body;
  School.sync();
  School.create({name, location, printer_model, printer_type})
  .then((school) => res.send(school))
  .catch(err => console.log(err))
}

exports.schoolToners = (req, res) => {
  School.findAll({
    include: {
      model: Toner,
      as: "Toners"
    },
  })
  .then((schools) => res.send(schools))
  .catch(err => console.log(err))
}

exports.allSchools = (req, res) => {
  School.findAll()
    .then((schools) => {
      if (schools) {
        res.send(schools)
      } else {
        console.log("No schools found")
      }
    })
    .catch(err => console.log(err))
}
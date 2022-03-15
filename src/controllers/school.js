const sequelize = require("../db/connection");
const School = require("../models/school");
const Toner = require("../models/toner");
const Location = require("../models/location");

exports.addSchool = (req, res) => {
  const {
    school_name
  } = req.body;
  School.sync();
  School.create({school_name})
  .then((school) => res.send(school))
  .catch(err => console.log(err))
}

exports.schoolToners = (req, res) => {
  School.findAll({
    include: {
      model: Location,
      as: "locations",
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: {
        model: Toner,
        as: "toners",
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      }
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
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
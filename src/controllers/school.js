const School = require("../models/school");

exports.addSchool = (req, res) => {
  const {
    id,
    name,
    location,
    printer_model
  } = req.body;
  School.sync()
  School.create({id, name, location, printer_model})
  .then((school) => res.send(school))
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
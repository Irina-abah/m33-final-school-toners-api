const School = require("../models/school");
// const School

exports.addSchool = (req, res) => {
  const {
    id,
    name,
    location,
    printer_model,
    printer_type
  } = req.body;
  School.sync()
  School.create({id, name, location, printer_model, printer_type})
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
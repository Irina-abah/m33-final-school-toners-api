const School = require("../models/school");

const addSchool = (req, res) => {
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

module.exports = {
  addSchool
};
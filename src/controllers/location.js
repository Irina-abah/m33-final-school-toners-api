const Location = require("../models/location");

exports.addLocation = (req, res) => {
  const {
    location_name,
    printer_model,
    printer_type,
    schoolId
  } = req.body;
  Location.sync()
  Location.create({location_name, printer_model, printer_type, schoolId})
  .then((location) => res.send(location))
  .catch((err) => {
    console.log(err)
    res.status(500).send({error: err.message})
  })
}
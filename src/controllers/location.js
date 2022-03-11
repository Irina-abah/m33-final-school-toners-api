const Location = require("../models/location");

exports.addLocation = (req, res) => {
  const {
    location_name,
    printer_model,
    printer_type,
    SchoolId
  } = req.body;
  Location.sync()
  Location.create({location_name, printer_model, printer_type, SchoolId})
  .then((location) => res.send({location}))
  .catch(err => console.log(err))
}
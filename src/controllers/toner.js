const Toner = require("../models/toner");

exports.addToner = (req, res) => {
  const {
    toner_name,
    colour,
    quantity,
    LocationId
  } = req.body;
  Toner.sync()
  Toner.create({toner_name, colour, quantity, LocationId})
  .then((toner) => res.send({toner}))
  .catch(err => console.log(err))
}


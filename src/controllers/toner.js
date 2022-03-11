const Toner = require("../models/toner");

exports.addToner = (req, res) => {
  const {
    toner_name,
    colour,
    quantity,
    // schoolId
  } = req.body;
  Toner.sync()
  Toner.create({toner_name, colour, quantity})
  .then((toner) => res.send(toner))
  .catch(err => console.log(err))
}


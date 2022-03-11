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

exports.deleteToner = (req, res) => {
  Toner.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((toner) => {
    if (toner) {
      res.send({
        message: "Toner was deleted successfully"
      })
    } else {
      res.send({
        message: "Cannot find toner"
      })
    }
  })
}

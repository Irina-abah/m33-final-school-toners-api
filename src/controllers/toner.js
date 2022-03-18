const Toner = require("../models/toner");

exports.addToner = (req, res) => {
  const {
    toner_name,
    colour,
    quantity,
    locationId
  } = req.body;
  Toner.sync()
  Toner.create({toner_name, colour, quantity, locationId})
  .then((toner) => res.send(toner))
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
  .catch((err) => {
    console.log(err)
    res.status(500).send({error: err.message})
  })
}

exports.updateToner = (req, res) => {
  const { toner_name, colour, quantity } = req.body;
  
  Toner.update({ toner_name, colour, quantity }, {
    where: {
      id: req.params.id
    }
  })
  .then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: "Toner was updated successfully."
      })
    } else {
      res.send({
        message: "There is a problem with Toner's id"
      })
    }
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send({error: err.message})
  })
}

exports.allToners = (req, res) => {
  Toner.findAll()
    .then((toners) => {
      if (toners) {
        res.send(toners)
      } else {
        console.log("No toners found")
      }
    })
    .catch(err => console.log(err))
}
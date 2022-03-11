const router = require('express').Router();
const { addLocation } = require("../controllers/location");

router.post("/locations", addLocation)

module.exports = router;
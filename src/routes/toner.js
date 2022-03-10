const router = require('express').Router();
const { addToner } = require("../controllers/toner");

router.post('/', addToner);

module.exports = router;
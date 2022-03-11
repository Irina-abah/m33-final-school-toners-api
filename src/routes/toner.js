const router = require('express').Router();
const { addToner, deleteToner } = require("../controllers/toner");

router.post('/', addToner);
router.delete("/:id", deleteToner)

module.exports = router;
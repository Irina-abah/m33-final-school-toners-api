const router = require('express').Router();
const { addToner, deleteToner, updateToner } = require("../controllers/toner");

router.post('/', addToner);
router.delete("/:id", deleteToner);
router.patch("/:id", updateToner)

module.exports = router;
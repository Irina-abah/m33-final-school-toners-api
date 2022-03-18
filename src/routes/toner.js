const router = require('express').Router();
const { addToner, deleteToner, updateToner, allToners } = require("../controllers/toner");

router.post('/', addToner);
router.delete("/:id", deleteToner);
router.patch("/:id", updateToner);
router.get("/", allToners)

module.exports = router;
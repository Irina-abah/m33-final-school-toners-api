const router = require('express').Router();
const { addSchool, allSchools, schoolToners } = require("../controllers/school");

router.post('/', addSchool);
router.get("/", allSchools);
router.get("/all", schoolToners)

module.exports = router;

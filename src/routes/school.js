const router = require('express').Router();
const { addSchool, allSchools } = require("../controllers/school");

router.post('/', addSchool);
router.get("/", allSchools);

module.exports = router;

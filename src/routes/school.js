const router = require('express').Router();
const { addSchool, allSchools } = require("../controllers/school");

router.post('/schools', addSchool);
router.get("/schools", allSchools);

module.exports = router;

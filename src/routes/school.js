const router = require('express').Router();
const { addSchool } = require("../controllers/school");

router.post('/schools', addSchool);

module.exports = router;

const router = require('express').Router();
const { getCurrentUser } = require("../controllers/user");

router.get("/profile", getCurrentUser);

module.exports = router;
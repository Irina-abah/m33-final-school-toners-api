const router = require('express').Router();
const { getCurrentUser, updateUserInfo } = require("../controllers/user");

router.get("/profile", getCurrentUser);
router.patch("/profile", updateUserInfo);

module.exports = router;
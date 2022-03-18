const router = require('express').Router();
const { getCurrentUser, updateUserInfo } = require("../controllers/user");

router.get("/profile/:id", getCurrentUser);
router.patch("/profile/:id", updateUserInfo);

module.exports = router;
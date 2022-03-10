const router = require('express').Router();
const { login, register } = require("../controllers/user");
const schoolRoutes = require("./school");
const userRoutes = require("./user");
const tonerRoutes = require("./toner");
const auth = require("../middlewares/auth");

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server is down');
  }, 0);
});

router.post('/signup', register);
router.post('/signin', login);
router.use('/users', auth, userRoutes);
router.use('/schools', schoolRoutes);
router.use('/toners', auth, tonerRoutes);

router.use('*', auth, (req, res) => {
  res.status(404).send({message: "Not found"})
});

module.exports = router;

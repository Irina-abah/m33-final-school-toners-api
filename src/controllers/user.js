const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;

// exports.addSchool = (req, res) => {
//   const {
//     id,
//     name,
//     location,
//     printer_model
//   } = req.body;
//   School.sync()
//   School.create({id, name, location, printer_model})
//   .then((school) => res.send(school))
//   .catch(err => console.log(err))
// }

// exports.allSchools = (req, res) => {
//   School.findAll()
//     .then((schools) => {
//       if (schools) {
//         res.send(schools)
//       } else {
//         console.log("No schools found")
//       }
//     })
//     .catch(err => console.log(err))
// }

exports.getCurrentUser = (req, res, next) => {
  User.findOne({
    where: {
      id: req.user._id
    }
  })
    .then((user) => res.send(user))
    .catch(next);
};

exports.register = (req, res) => {
  const {
    name, 
    email, 
    password,
  } = req.body;
  User.sync()
  bcrypt.hash(password, 8)
    .then((hash) => User.create({
      name, email, password: hash,
    }))
    .then((user) => res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
    }))
    .catch(err => console.log(err))
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  return User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then((user) => {
      if (!user) {
        res.status(500).send({message: "Entered wrong email"})
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            res.status(500).send({message: "Incorrect password"})
          }
          const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret', { expiresIn: '7d' });
          res.send({ token });
        })
        .catch(err => {
          console.log(err)
          res.status(500).send({error: err.message})
        })
    });
};

// const updateUserInfo = (req, res, next) => {
//   const { email, name } = req.body;

//   User.findByIdAndUpdate(req.user._id, { email, name }, {
//     new: true,
//     runValidators: true,
//     context: 'query',
//   })
//     .orFail(new NotFoundError(USER_ERROR_MESSAGES.NO_FOUND_ERROR))
//     .then((user) => res.send(user))
//     .catch((err) => {
//       if (err.name === 'ValidationError') {
//         throw new BadRequestError(USER_ERROR_MESSAGES.NO_UPDATE_ERROR);
//       }
//       throw err;
//     })
//     .catch(next);
// };


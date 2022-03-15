const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;

// exports.getCurrentUser = (req, res) => {
//   User.findOne({
//     where: {
//       user: req.user
//     }
//   })
//     .then((user) => res.send(user))
//     .catch(err => console.log(err));
// };

exports.getCurrentUser = (req, res) => {
  User.findByPk(req.userId)
    .then((user) => res.send({
      name: user.name,
      email: user.email}))
    .catch(err => console.log(err));
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
      id: user.id,
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
          const token = jwt.sign({ id: user.id }, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret', { expiresIn: '7d' });
          res.send({ token });
        })
        .catch(err => {
          console.log(err)
          res.status(500).send({error: err.message})
        })
    });
};

exports.updateUserInfo = (req, res) => {
  const { email, name } = req.body;
  
    User.update({ email, name },
      { where: {
        id: req.body.id
      }
    })  
    .then((num) => {
      console.log(num)
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        })
      } else {
        res.send({
          message: "There is a problem with ID"
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({error: err.message})
    })
};

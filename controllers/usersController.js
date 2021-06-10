const db = require("../models");
const UserModel = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  authorizeUser: function (req, res) {
    console.log(req);
    res.json(req);
    // db.User.findOne({

    // })
  },
  createNewUser: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // loginUser: function (req, callback) {
  //   UserModel.findOne({ email: req.query.email }).exec(function (error, user) {
  //     if (error) {
  //       callback.status(422).json(error)
  //     } else if (!user) {
  //       callback.status(404).json(error)
  //     } else {
  //       user.comparePassword(req.query.password, function (matchError, isMatch) {
  //         if (matchError) {
  //           callback.status(422).json(error)
  //         } else if (!isMatch) {
  //           callback.status(401).json(error)
  //         } else {
  //           jwt.sign({ _id: user }, process.env.SECRET_KEY, (err, token) => {
  //             // callback.json({ token })
  //             console.log(token);
  //             // callback.setHeader('auth-token', token);
  //             // callback.json(token, user);
  //             callback.status(200).json(token)
  //           })
  //           // callback.json({ success: true })
  //           // res.setHeader('auth-token', token);
  //         }
  //       })
  //     }
  //   })
  // },
  loginUser: function (req, res, next) {
    console.log('foo')
    let getUser;
    UserModel.findOne({
      email: req.query.email
    }).then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      getUser = user;
      console.log(user);
      return bcrypt.compare(req.query.password, user.password);
    }).then(response => {
      if (!response) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      let jwtToken = jwt.sign({
        userId: getUser._id
      }, process.env.SECRET_KEY, {
        expiresIn: "14d"
      });
      console.log(jwtToken);
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        msg: getUser
      });
    }).catch(err => {
      return res.status(401).json({
        message: "Authentication failed"
      });
    });
  },
  getUserData: function (req, res) {
    db.User.findOne(req.query, { password: 0 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.body.params._id }, { openingTime: req.body.params.update.openingTime, closingTime: req.body.params.update.closingTime })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserDataByEmail: function (req, res) {
    db.User.findOne(req.query, { password: 0 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

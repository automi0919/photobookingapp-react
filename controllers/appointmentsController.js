const db = require("../models");
const UserModel = require('../models/user')
const { getMaxListeners } = require("../models/appointment");

module.exports = {
  create: function (req, res) {
    db.Appointment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAppointmentsByDate: function (req, res) {
    db.Appointment.find({ date: req.query.date, status: "active" })
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  createNewUser: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createNewPackage: function (req, res) {
    console.log(req)
    db.Package.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  loginUser: function (req, callback) {
    UserModel.findOne({ email: req.query.email }).exec(function (error, user) {
      if (error) {
        callback.status(422).json(error)
      } else if (!user) {
        callback.status(404).json(error)
      } else {
        user.comparePassword(req.query.password, function (matchError, isMatch) {
          if (matchError) {
            callback.status(42).json(error)
          } else if (!isMatch) {
            callback.status(401).json(error)
          } else {
            callback.json({ success: true })
          }
        })
      }
    })
  },
  getDashboardData: function (req, res) {
    db.Appointment.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserData: function (req, res) {
    db.User.findOne(req.query, { password: 0 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  cancelEvent: function (req, res) {
    db.Appointment.findOneAndUpdate(req.body.params, { status: 'cancelled' })
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

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
    db.Appointment.find(req.query)
      .then(dbModel => {
        // let formattedDbModel = dbModel.map((slot) => slot.startTime)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  createNewUser: function (req, res) {
    db.User.create(req.body)
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
    // console.log(req.query)
    db.Appointment.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getUserData: function (req, res) {
    console.log(req.query)
    db.User.findOne(req.query, { password: 0 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  cancelEvent: function (req, res) {
    console.log(req.body.params)
    db.Appointment.findOneAndUpdate(req.body.params, { status: 'cancelled' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

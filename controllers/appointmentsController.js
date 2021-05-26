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
    db.Appointment.find(req.query, "-_id timeSlot")
      .then(dbModel => {
        let formattedDbModel = dbModel.map((slot) => slot.timeSlot)
        res.json(formattedDbModel)
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
        callback.status(422).json(error)
      } else {
        user.comparePassword(req.query.password, function (matchError, isMatch) {
          if (matchError) {
            callback.status(42).json(error)
          } else if (!isMatch) {
            callback.status(422).json(error)
          } else {
            callback.json({ success: true })
          }
        })
      }
    })
  },
  getDashboardData: function (req, res) {
    console.log(req.query)
    db.Appointments.find({ email: req.query })
  },
  getUserData: function (req, res) {
    db.User.findOne(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

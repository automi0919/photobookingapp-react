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
  // loginUser: function (req, res) {
  //   db.User.findOne({ email: req.query.email })
  //     .then(db.User.comparePassword(req.query.password, function (matchError, isMatch)))
  //     // .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  loginUser: function (req, callback) {
    UserModel.findOne({ email: req.query.email }).exec(function (error, user) {
      if (error) {
        callback.json({ error: true })
      } else if (!user) {
        callback.json({ error: true })
      } else {
        user.comparePassword(req.query.password, function (matchError, isMatch) {
          if (matchError) {
            callback.json({ error: true })
          } else if (!isMatch) {
            callback.json({ error: true })
          } else {
            callback.json({ success: true })
          }
        })
      }
    })
  }
};

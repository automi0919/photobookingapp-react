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
  //   console.log(req.query.email);
  //   db.User.findOne({email: req.query.email}).exec(funcion (error, user) {
  //     if (error) {
  //       return "Sorry, an error has occured"
  //     } else if (!user) {

  //     }
  //   })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  loginUser: function (req, callback) {
    UserModel.findOne({ email: req.query.email }).exec(function (error, user) {
      if (error) {
        callback({ error: true })
      } else if (!user) {
        callback({ error: true })
      } else {
        user.comparePassword(req.query.email, function (matchError, isMatch) {
          if (matchError) {
            callback({ error: true })
          } else if (!isMatch) {
            callback({ error: true })
          } else {
            callback({ success: true })
          }
        })
      }
    })
  }
};

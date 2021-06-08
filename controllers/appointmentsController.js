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
  getDashboardData: function (req, res) {
    db.Appointment.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  cancelEvent: function (req, res) {
    db.Appointment.findOneAndUpdate(req.body.params, { status: 'cancelled' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

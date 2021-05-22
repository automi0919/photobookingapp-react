const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.Appointment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAppointmentsByDate: function (req, res) {
    db.Appointment.find({ date: '2021-05-23' })
      .then(console.log(req.body))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

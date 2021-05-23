const db = require("../models");

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
      // .then(dbModel => res.json(formattedDbModel))
      .catch(err => res.status(422).json(err));
  }
};

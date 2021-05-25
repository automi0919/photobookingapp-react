const db = require("../models");
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
  loginUser: function (req, res) {
    db.User.findOne({ email: 'mknowlton89@gmail.com' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

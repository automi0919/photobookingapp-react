const db = require("../models");

// Defining methods for the postsController
module.exports = {
  // create: function(req, res) {
  //   db.Appointment.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  create: function (req, res) {
    db.Appointment.create(req.body);
  }
}

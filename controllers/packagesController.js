const db = require("../models");
const UserModel = require('../models/user')
const { getMaxListeners } = require("../models/appointment");

module.exports = {
  createNewPackage: function (req, res) {
    db.Package.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getPackageData: function (req, res) {
    db.Package.find({ photographerId: req.query._id }).sort({ price: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

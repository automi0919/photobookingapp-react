const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/packages"
router
    .route('/new')
    .post(appController.createNewPackage)

module.exports = router;

const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router
    .route('/')
    .post(appController.create)
    .get(appController.getAppointmentsByDate)

module.exports = router;

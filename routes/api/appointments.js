const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router
    .route('/')
    .post(appController.create)
    .get(appController.getAppointmentsByDate)

    router
    .route('/dashboard')
    .get(appController.getDashboardData)

module.exports = router;

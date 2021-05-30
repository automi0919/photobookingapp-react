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

router
    .route('/cancel/:id')
    .post(appController.cancelEvent)

module.exports = router;

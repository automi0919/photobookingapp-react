const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentsController");

// Matches with "/api/appointments"
router
    .route('/')
    .post(appointmentController.create)
    .get(appointmentController.getAppointmentsByDate)

router
    .route('/dashboard')
    .get(appointmentController.getDashboardData)

router
    .route('/cancel/:id')
    .post(appointmentController.cancelEvent)

module.exports = router;

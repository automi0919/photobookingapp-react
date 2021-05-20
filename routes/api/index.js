const router = require("express").Router();
const appointmentRoutes = require("./appointments");

// Post routes
router.use("/appointments", appointment);

module.exports = router;

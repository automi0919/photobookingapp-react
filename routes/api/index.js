const router = require("express").Router();
const appRoutes = require("./appointments");

// Post routes
router.use("/appointments", appRoutes);

module.exports = router;

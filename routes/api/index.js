const router = require("express").Router();
const appRoutes = require("./appointments");
const userRoutes = require('./appointments');

// Post routes
router.use("/appointments", appRoutes);
router.use("/users", userRoutes);

module.exports = router;

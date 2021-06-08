const router = require("express").Router();
const appRoutes = require("./appointments");
const userRoutes = require('./users');
const packageRoutes = require('./packages');

// Post routes
router.use("/appointments", appRoutes);
router.use("/users", userRoutes);
router.use("/packages", packageRoutes);

module.exports = router;

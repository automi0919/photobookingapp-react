const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/posts"
router
.route('/')
.post(appController.create);

module.exports = router;

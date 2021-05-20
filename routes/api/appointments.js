const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

// Matches with "/api/posts"
router
    .post(appointmentsController.create);

module.exports = router;

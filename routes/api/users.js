const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/users"
router
    .route('/')
    .post(appController.createNewUser)
    .get(appController.loginUser)

module.exports = router;

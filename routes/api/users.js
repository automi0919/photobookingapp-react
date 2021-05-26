const router = require("express").Router();
const appController = require("../../controllers/appointmentsController");

// Matches with "/api/users"
router
    .route('/')
    .post(appController.createNewUser)
    .get(appController.loginUser)

router
    .route('/dashboard')
    .get(appController.getUserData)

module.exports = router;

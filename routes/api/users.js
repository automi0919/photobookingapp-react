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

router
    .route('/update/:id')
    .post(appController.updateUser)

router
    .route('/:email')
    .get(appController.getUserDataByEmail)

module.exports = router;

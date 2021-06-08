const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
    .route('/')
    .post(usersController.createNewUser)
    .get(usersController.loginUser)

router
    .route('/dashboard')
    .get(usersController.getUserData)

router
    .route('/update/:id')
    .post(usersController.updateUser)

router
    .route('/:email')
    .get(usersController.getUserDataByEmail)

module.exports = router;

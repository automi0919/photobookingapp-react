const router = require("express").Router();
const packagesController = require("../../controllers/packagesController");

// Matches with "/api/packages"
router
    .route('/new')
    .post(packagesController.createNewPackage)

router
    .route('/')
    .get(packagesController.getPackageData)

module.exports = router;

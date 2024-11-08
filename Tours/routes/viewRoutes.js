const express = require('express');
const viewsController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();
// router.use(authController.isLoggedIn);

router.get('/login', viewsController.getLoginForm);
router.route('/new').get(viewsController.renderNewUser);
router.post('/signUp', viewsController.renderSignup);
router.get('/signUp', viewsController.renderSignup);
router.get('/logout', authController.logOut);

// router.post('/signUp', viewsController.renderSignup);
module.exports = router;

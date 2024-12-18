const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .get(tourController.getAll)
  .post(userController.uploadUserPhoto, tourController.create);

router.route('/all').get(authController.protect, tourController.renderAll);
router.route('/all/:id').get(tourController.getOne);

router.route('/overview').get(tourController.renderhome);

router
  .route('/new')
  .get(tourController.renderAdd)
  .post(userController.uploadUserPhoto, tourController.createWeb);
router
  .route('/:id')
  .get(tourController.getOne)
  .patch(tourController.update)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    tourController.delete
  );

module.exports = router;

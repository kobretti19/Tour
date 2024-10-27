const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.route('/').get(tourController.getAll).post(tourController.create);

router
  .route('/:id')
  .get(tourController.getOne)
  .patch(tourController.update)
  .delete(tourController.delete);

module.exports = router;

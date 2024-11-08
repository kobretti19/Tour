const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/', authController.login);
router.get('/', userController.getAll);
router
  .route('/:id')
  .get(userController.getOne)
  .patch(userController.uploadUserPhoto, userController.update)
  .delete(userController.delete);

module.exports = router;

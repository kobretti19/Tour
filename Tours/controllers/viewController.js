const Tour = require('../models/tourModel');
const User = require('../models/userModel');

exports.getLoginForm = (req, res) => {
  try {
    res.status(200).render('login', {
      title: 'Log into your account',
    });
  } catch (err) {
    res.status(500).send('Error');
  }
};
exports.TourView = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).render('tours', {
      tours,
    });
  } catch (err) {
    res.status(500).send('Errror');
  }
};
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);
    res.render('newUser', { newUser: newUser });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.renderNewUser = (req, res) => {
  try {
    res.render('users');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.renderSignup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    console.log(newUser);

    res.render('newUser', { newUser: newUser });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

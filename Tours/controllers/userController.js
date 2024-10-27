const User = require('../models/userModel');

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const users = await User.find();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.update = (req, res) => {
  try {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
exports.delete = (req, res) => {
  try {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

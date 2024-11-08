const Tour = require('../models/tourModel');
const validator = require('validator');

exports.getAll = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.renderAll = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.render('tours', { tours: tours });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
exports.renderhome = async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.renderAdd = async (req, res) => {
  try {
    res.render('createTour');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return next(`No tour found with that ID`, 404);
    }
    res.status(200).json({
      status: 'success',
      tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createWeb = async (req, res) => {
  try {
    const tour = Tour.create(req.body);
    res.redirect('tours/all');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const tour = Tour.create(
      req.body

      //   {
      //   name: req.body.name,
      //   duration: req.body.duration,
      //   difficulty: req.body.difficulty,
      //   price: req.body.price,
      //   summary: req.body.summary,
      //   imageCover: req.body.imageCover,
      //   images: req.body.images,
      //   cratedAt: req.body.cratedAt,
      // });
    );

    res.status(201).json({
      status: 'success',
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return next(`No tour found with that ID`, 404);
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

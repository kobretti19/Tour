const Tour = require('../models/tourModel');

exports.getLoginForm = (req, res) => {
  try {
    res.status(200).render('login', {
      title: 'Login form',
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

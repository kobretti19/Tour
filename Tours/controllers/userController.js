const User = require('../models/userModel');
const multer = require('multer');
const uuid = require('uuid');
// const upload = multer({ dest: 'public/img/users' });
const imageId = uuid.v4();
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/tours');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${imageId}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images'));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo'); //req.file
exports.uploadMultiplePhoto = upload.array('photos', 4); //

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.status(500).json({
      status: 'success',
      data: user,
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
    const users = await User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.password,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(500).json({
      status: 'success',
      data: {
        data: doc,
      },
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
exports.renderSingUp = (req, res) => {
  try {
    res.render('users');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

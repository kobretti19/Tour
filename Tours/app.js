const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});
app.use('/', viewRouter);
app.use('/homepage', tourRouter);
app.use('/tours', tourRouter);
app.use('/create', tourRouter);
app.use('/users', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;

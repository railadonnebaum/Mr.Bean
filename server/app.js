var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var ordersRouter = require('./routes/orders');
var productsRouter = require('./routes/products');
var opinionRouter = require('./routes/opinion')
var blogRouter = require('./routes/blog')
var contactRouter = require('./routes/contact')
var ideaRouter = require('./routes/idea')
var customersRouter = require('./routes/customers')
var customerRouter = require('./routes/customer')
var characterRouter = require('./routes/character')
var emailRouter = require('./routes/email')

var cors = require('cors');
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.connect('mongodb-connection', {useNewUrlParser: true, useUnifiedTopology: true});
var db1 = mongoose.connection;
db1.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/orders', ordersRouter);
app.use('/products',productsRouter)
app.use('/opinion',opinionRouter)
app.use('/blog', blogRouter)
app.use('/contacts',contactRouter)
app.use('/ideas',ideaRouter)
app.use('/customers',customersRouter)
app.use('/customer',customerRouter)
app.use('/characters',characterRouter)
app.use('/email', emailRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

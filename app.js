var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var html = require('html');
var hbs = require('hbs');
var session = require('express-session');
var fileUpload = require('express-fileupload');
var mongodb = require('mongo');
var monk = require('monk');
var db = monk("mongodb://admin:admin@ds157439.mlab.com:57439/youtube-db");
var passwordHash = require('password-hash');
var readChunk = require('read-chunk');
var fileType = require('file-type');
var fs = require('fs');
var resizeImg = require('resize-img');

var login = require('./routes/login');
var register = require('./routes/register');
var currentSession = require('./routes/session');
var logout = require('./routes/logout');
var upload = require('./routes/upload');
var videos = require('./routes/allVideos');
var getVideo = require('./routes/getVideo');

var app = express();
app.use(function (req, resp, next) {
    req.db = db;
    next();
});


// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: '1234'}));
app.use(fileUpload());


app.use('/login', login);
app.use('/register', register);
app.use('/session', currentSession);
app.use('/logout', logout);
app.use('/upload', upload);
app.use('/allVideos', videos);
app.use('/getVideo', getVideo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
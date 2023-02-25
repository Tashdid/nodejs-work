var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const jwt = require('./authentication/jwt');
const errorHandler = require('./authentication/errorHandler');
var poolCheck = require('./database/poolCheck');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/userAPI');
var logAPIRouter = require('./routes/logAPI');
var logFileAPIRouter = require('./routes/logFileAPI');
var resultFailureAPIRouter = require('./routes/resultFailureAPI');
var dashBoardAPIRouter = require('./routes/dashBoardAPI');
var monitoringDataAPIRouter = require('./routes/monitoringDataAPI');
var monitoringDetailsAPIRouter = require('./routes/monitoringDetailsAPI');
var soapXMLAPIRouter = require('./routes/soapXMLAPI');
var servicesConfigurationsAPIRouter =
    require('./routes/servicesConfigurationsAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(jwt());
app.use(errorHandler);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(poolCheck);

app.use('/', indexRouter);
app.use('/userAPI', userRouter);
app.use('/logAPI', logAPIRouter);
app.use('/logFileAPI', logFileAPIRouter);
app.use('/resultFailureAPI', resultFailureAPIRouter);
app.use('/dashBoardAPI', dashBoardAPIRouter);
app.use('/monitoringDataAPI', monitoringDataAPIRouter);
app.use('/monitoringDetailsAPI', monitoringDetailsAPIRouter);
app.use('/soapXMLAPI', soapXMLAPIRouter);
app.use('/servicesConfigurationsAPI', servicesConfigurationsAPIRouter);

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

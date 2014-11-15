
/**
 * Module dependencies.
 */

var express = require('express'),
	favicon = require('static-favicon'),
	logger = require('morgan'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	errorHandler = require('errorhandler'),
	path = require('path'),
	Q = require('q');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon());
app.use(logger('dev'));
app.use(methodOverride());
app.use(cookieParser('your secret here'));
app.use(session());

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

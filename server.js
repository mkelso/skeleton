var express = require('express'),
    logger = require('morgan'),
    http = require('http'),
    mongojs = require('mongojs'),
    path = require('path')

var config = (require(path.join(__dirname, 'app/config')));

var app = express();
var server = http.createServer(app).listen(config.port);

// serve the public files to the client
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//logger
app.use(logger('dev'));

// setup mongo
var collections = [];
var db = mongojs(config.databaseURL, collections);

db.runCommand({
    ping: 1
}, handleDatabasePingResponse);

function handleDatabasePingResponse(err, res) {
    if (err) console.log('Error connecting to database');
    else console.log('Databse online!');
}


// setup the routes
require('./app/routes.js')(app, db);

module.exports = app;
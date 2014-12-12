'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(express.static(__dirname + '/app'));

//require('./routes/users_routes')(app);

//mongoose.connect('mongodb://localhost/dogmatch');
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {//verifies db is connected
//});

//app.set('port', 3000);
app.listen(3000, function() {
  console.log("Port is running on port: %d", 3000);
});

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
app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/dogmatch');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {//verifies db is connected
});

app.set('port', process.env.PORT || 3333);
app.listen(app.get('port'), function() {
  console.log("Port is running on port: %d",  app.get('port'));
});

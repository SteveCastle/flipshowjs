

var fs = require('fs');
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('./config/express')(app, config);

io.on('connection', function(socket){
  fs.readFile('C:/Users/Steve/Documents/GitHub/flipshowjs/public/img/test.jpg', function(err, buf){
    // it's possible to embed binary data
    // within arbitrarily-complex objects
    socket.emit('image', { image: true, buffer: buf });
  });
});

http.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});


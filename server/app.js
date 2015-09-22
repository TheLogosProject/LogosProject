/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
// var io = require('socket.io').listen(app);

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options); //development.js

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

//JANKY socket timer TODO: move and refactor this!!!!!!!!!!!!!!!!!


var myTimer;
var countdown;
function timer() {
  countdown--;
  if(countdown === 0) {
    clearInterval(myTimer);
    // console.log('stopping timer clearInterval');
  }
  socketio.emit('timer', { countdown: countdown });
  // console.log('countdown is ' + countdown);
}

// var myTimer = setInterval(timer, 1000);
//start the timer
socketio.on('connection', function (socket) {
  socket.on('start', function (data) {
    // console.log(data.time + ' is socket data');
    countdown = data.time;
    myTimer = setInterval(timer, 1000);
  });
});
socketio.on('connection', function (socket) {
  socket.on('reset', function (data) {
    clearInterval(myTimer);
    // console.log('stopping timer clearInterval');
    // countdown = 180;
  });
});
// socketio.on('connection', function (socket) {
//   socket.on('start', function (data) {
//     countdown = 5;
//     myTimer = setInterval(timer, 1000);
//     socketio.emit('timer', {countdown: countdown });
//   })
// })

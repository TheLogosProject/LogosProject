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


//Mike's Stuff

//DEPENDENCIES
// var express = require('express'),
//     mongoose = require('mongoose'),
//     bodyParser = require('body-parser'),
//     cors = require('cors'),
//     MongoLab = require('./mongolab');
//
// //CONTROLLERS
// var gymsCtrl = require('./api/gym/gym.ctrl.js'),
//     userCtrl = require('./api/user/user.ctrl.js'),
//     pathwaysCtrl = require('./api/pathway/pathway.ctrl.js');
//
// //EXPRESS
// var app = express();
//
// //CONNECTION
// var mongoUri = 'mongodb://' + MongoLab.userName + ':' + MongoLab.password + '@ds059682.mongolab.com:59682/the-logos-project';
// mongoose.set('debug', true);
// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function () {
//     console.log('Now connected to The Logos Project database!!');
// });
//
// //MIDDLEWARE
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('./client'));
//
// //ENDPOINTS
// //--Gym Endpoints--//
// app.get('/api/gym', gymsCtrl.getAllGyms);
// app.get('/api/gym-names', gymsCtrl.getGymNames);
// app.get('/api/gym-details/:gymId', gymsCtrl.getGymDetails);
// app.get('/api/gym-pathway/:gymId', gymsCtrl.getGymPathway);//PROGRAMMING/GET GYM
// app.post('/api/gym-stage', gymsCtrl.getStages);//PROGRAMMING/GET STAGES
// app.post('/api/gym-evaluations', gymsCtrl.getEvaluations);//PROGRAMMING/GET EVALUATIONS
// app.post('/api/gym-evaluation-specifics', gymsCtrl.getSpecificEval);//PROGRAMMING/GET SPECIFIC EVALUATION
// app.post('/api/gym', gymsCtrl.saveGym);
// app.post('/api/gym-add-evaluation', gymsCtrl.addEvaluation);//PROGRAMMING/ADDING EVAL
// app.put('/api/gym-update', gymsCtrl.updateGym);
// app.put('/api/gym-edit-evaluation', gymsCtrl.editEvaluation);//PROGRAMMING/EDIT EVAL
// //--User Endpoints--//
// app.get('/api/user', userCtrl.getAllUsers);
// app.get('/api/user/:memberId', userCtrl.findByID);
// app.get('/api/user-details/:memberId', userCtrl.getUserDetails);
// app.get('/api/user-logos/:memberId', userCtrl.getUserLogos);
// app.get('/api/user-pathos/:memberId', userCtrl.getUserPathos);
// app.get('/api/user-ethos/:memberId', userCtrl.getUserEthos);
// app.post('/api/add-user', userCtrl.addUser);
// app.put('/api/user-update', userCtrl.updateUser);
// //--Pathway Endpoints--//
// app.get('/api/pathway', pathwaysCtrl.find);
// app.post('/api/pathway', pathwaysCtrl.save);
//
// //LISTEN
// app.listen(8555);

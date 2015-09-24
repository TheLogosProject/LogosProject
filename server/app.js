/**
 * Main application file
 */

(function () {
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

// //ENDPOINTS
// //--Gym Endpoints--//
// app.get('/api/gym', gymsCtrl.getAllGyms);
// app.get('/api/gym-names', gymsCtrl.getGymNames);
// app.get('/api/gym-details/:gymId', gymsCtrl.getGymDetails);
// app.get('/api/gym-pathway/:gymId', gymsCtrl.getGymPathway);//PROGRAMMING/GET GYM
// app.post('/api/gym-stage', gymsCtrl.getStages);//PROGRAMMING/GET STAGES
// app.post('/api/gym-evaluations', gymsCtrl.getEvaluations);//PROGRAMMING/GET EVALUATION
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
// app.put('/api/user-evaluation-update', userCtrl.updateEvalStatus);
// app.put('/api/user-update-isadmin', userCtrl.userIsAdminUpdate);
// app.put('/api/user-update-isactive', userCtrl.userIsActiveUpdate);
// //--Pathway Endpoints--//
// app.get('/api/pathway', pathwaysCtrl.find);
// app.post('/api/pathway', pathwaysCtrl.save);
}());

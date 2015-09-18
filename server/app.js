//DEPENDENCIES
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    MongoLab = require('./mongolab');

//CONTROLLERS
var gymsCtrl = require('./api/gym/gym.ctrl.js'),
    userCtrl = require('./api/user/user.ctrl.js'),
    pathwaysCtrl = require('./api/pathway/pathway.ctrl.js');

//EXPRESS
var app = express();

//CONNECTION
var mongoUri = 'mongodb://' + MongoLab.userName + ':' + MongoLab.password + '@ds059682.mongolab.com:59682/the-logos-project';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Now connected to The Logos Project database!!');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./client'));

//ENDPOINTS
//--Gym Endpoints--//
app.get('/api/gym', gymsCtrl.getAllGyms);
app.get('/api/gym-names', gymsCtrl.getGymNames);
app.get('/api/gym-details/:gymId', gymsCtrl.getGymDetails);
app.post('/api/gym', gymsCtrl.saveGym);
//--User Endpoints--//
app.get('/api/user', userCtrl.getAllUsers);
app.get('/api/user/:memberId', userCtrl.findByID);
app.get('/api/user-details/:memberId', userCtrl.getUserDetails);
app.post('/api/add-user', userCtrl.addUser);
//--Pathway Endpoints--//
app.get('/api/pathway', pathwaysCtrl.find);
app.post('/api/pathway', pathwaysCtrl.save);

//LISTEN
app.listen(8555);

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
app.get('/api/gym-pathway/:gymId', gymsCtrl.getGymPathway);//PROGRAMMING/GET GYM
app.post('/api/gym-stage', gymsCtrl.getStages);//PROGRAMMING/GET STAGES
app.post('/api/gym-evaluations', gymsCtrl.getEvaluations);//PROGRAMMING/GET EVALUATIONS
app.post('/api/gym-evaluation-specifics', gymsCtrl.getSpecificEval);//PROGRAMMING/GET SPECIFIC EVALUATION
app.post('/api/gym', gymsCtrl.saveGym);
app.post('/api/gym-add-evaluation', gymsCtrl.addEvaluation);//PROGRAMMING/ADDING EVAL
app.put('/api/gym-update', gymsCtrl.updateGym);
app.put('/api/gym-edit-evaluation', gymsCtrl.editEvaluation);//PROGRAMMING/EDIT EVAL
//--User Endpoints--//
app.get('/api/user', userCtrl.getAllUsers);
app.get('/api/user/:memberId', userCtrl.findByID);
app.get('/api/user-details/:memberId', userCtrl.getUserDetails);
app.post('/api/add-user', userCtrl.addUser);
app.put('/api/user-update', userCtrl.updateUser);
//--Pathway Endpoints--//
app.get('/api/pathway', pathwaysCtrl.find);
app.post('/api/pathway', pathwaysCtrl.save);

//LISTEN
app.listen(8555);

(function () {
  'use strict';


var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var Pathway = require('../pathway/pathway.model'),
    Gym = require('../gym/gym.model');



var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);

  // var team = new Team({players:[]});
  // team.save(function(err, user) {
  //   if (err) return validationError(res, err);
  //   console.log(team + 'team saved');
  //   });
  // newUser.team = team;
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};




//Added Mike's stuff

// module.exports = {
//     getAllUsers: function (req, res) {
//         User.find(req.query)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response);
//                 }
//             });
//     },
//     findByID: function (req, res) {
//         User.findById(req.params.memberId)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response);
//                 }
//             });
//     },
//     getUserDetails: function (req, res) {
//         User.findById(req.params.memberId)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     var userObj = {
//                         _id: response._id,
//                         name: response.name,
//                         gender: response.gender,
//                         age: response.age,
//                         weight: response.weight,
//                         height: response.height,
//                         goals: response.goals,
//                         contact_info: response.contact_info
//                     };
//                     Gym.findById(response.gym)
//                         .exec(function (err, response) {
//                             if (err) {
//                                 res.send(err);
//                             } else {
//                                 var gymObj = {
//                                     _id: response._id,
//                                     name: response.name
//                                 };
//                                 var newObj = {
//                                     user: userObj,
//                                     gym: gymObj
//                                 };
//                                 res.send(newObj);
//                             }
//                         });
//                 }
//             });
//     },
//     getUserLogos: function (req, res) {
//         User.findById(req.params.memberId)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response.pathways[0]);
//                 }
//             });
//     },
//     getUserPathos: function (req, res) {
//         User.findById(req.params.memberId)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response.pathways[1]);
//                 }
//             });
//     },
//     getUserEthos: function (req, res) {
//         User.findById(req.params.memberId)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response.pathways[2]);
//                 }
//             });
//     },
//     addUser: function (req, res) {
//         var newUser = new User(req.body);
//         newUser.save(function (err, response) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 var userID = response._id;
//                 User.findById(userID)
//                     .populate('gym')
//                     .exec(function (err, response) {
//                         if (err) {
//                             res.send(err);
//                         } else {
//                             var newUserObj = response;
//                             Gym.findById(newUserObj.gym)
//                                 .exec(function (err, response) {
//                                     if (err) {
//                                         res.send(err);
//                                     } else {
//                                         var pathwayCount = response.gym_pathway_program;
//                                         for (var i = 0; i < pathwayCount.length; i++) {
//                                             var stagesCount = pathwayCount[i]["stages"];
//                                             var stagesLength = stagesCount.length;
//                                             var x = 0;
//                                             while (x < stagesLength) {
//                                                 stagesCount[x]["total_to_complete"] = 100 / stagesLength;
//                                                 var stagesValue = stagesCount[x]["total_to_complete"];
//                                                 var evaluationCount = stagesCount[x]["evaluations"];
//                                                 var evaluationLength = evaluationCount.length;
//                                                 var y = 0;
//                                                 while (y < evaluationLength) {
//                                                     evaluationCount[y]["total_to_complete"] = stagesValue / evaluationLength;
//                                                     y++;
//                                                 }
//                                                 x++;
//                                             }
//                                         }
//                                         var userPathways = [];
//                                         for (var y = 0; y < pathwayCount.length; y++) {
//                                             userPathways.push(pathwayCount[y]);
//                                         }
//                                         newUserObj.pathways = userPathways;
//                                         User.findByIdAndUpdate(userID, newUserObj)
//                                             .exec(function (err, response) {
//                                                 if (err) {
//                                                     res.send(err);
//                                                 } else {
//                                                     Gym.findById(req.body.gym)
//                                                         .exec(function (err, response) {
//                                                             if (err) {
//                                                                 res.send(err);
//                                                             } else {
//                                                                 var newMemberToGym = response.members;
//                                                                 newMemberToGym.push(userID);
//                                                                 var newGymObj = {
//                                                                     members: newMemberToGym
//                                                                 };
//                                                                 Gym.findByIdAndUpdate(req.body.gym, newGymObj)
//                                                                     .exec(function (err, response) {
//                                                                         if (err) {
//                                                                             res.send(err);
//                                                                         } else {
//                                                                             res.send(response);
//                                                                         }
//                                                                     });
//                                                             }
//                                                         });
//                                                 }
//                                             });
//                                     }
//                                 });
//                         }
//                     });
//             }
//         });
//     },
//     updateUser: function (req, res) {
//         User.findByIdAndUpdate(req.body._id, req.body)
//             .exec(function (err, response) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response);
//                 }
//             });
//     }
// };

/* For initial user add testing
{
    "name": {
        "first": "Mike",
        "last": "Buckley"
    },
    "gym": "55fddafabb429c4575c69617"
}
*/


}());

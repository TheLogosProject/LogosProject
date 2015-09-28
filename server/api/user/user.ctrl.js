/* jshint -W069 */
/* jshint -W116 */
/* jshint -W083 */
/* jshint -W004 */
/* jshint -W030 */

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var Pathway = require('../pathway/pathway.model');
var Gym = require('../gym/gym.model');



var validationError = function (res, err) {
    return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function (req, res) {
    User.find({}, '-salt -hashedPassword', function (err, users) {
        if (err) return res.send(500, err);
        res.json(200, users);
    });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.save(function (err, response) {
        if (err) {
            res.send(err);
        } else {
            var userID = response._id;
            User.findById(userID)
                .populate('gym')
                .exec(function (err, response) {
                    if (err) {
                        res.send(err);
                    } else {
                        var newUserObj = response;
                        Gym.findById(newUserObj.gym)
                            .exec(function (err, response) {
                                if (err) {
                                    res.send(err);
                                } else {
                                    var pathwayCount = response.gym_pathway_program;
                                    for (var i = 0; i < pathwayCount.length; i++) {
                                        var stagesCount = pathwayCount[i]["stages"];
                                        var stagesLength = stagesCount.length;
                                        var x = 0;
                                        while (x < stagesLength) {
                                            stagesCount[x]["total_to_complete"] = 100 / stagesLength;
                                            var stagesValue = stagesCount[x]["total_to_complete"];
                                            var evaluationCount = stagesCount[x]["evaluations"];
                                            var evaluationLength = evaluationCount.length;
                                            var y = 0;
                                            while (y < evaluationLength) {
                                                evaluationCount[y]["total_to_complete"] = stagesValue / evaluationLength;
                                                y++;
                                            }
                                            x++;
                                        }
                                    }
                                    var userPathways = [];
                                    for (var y = 0; y < pathwayCount.length; y++) {
                                        userPathways.push(pathwayCount[y]);
                                    }
                                    newUserObj.pathways = userPathways;
                                    User.findByIdAndUpdate(userID, newUserObj)
                                        .exec(function (err, user) {
                                            if (err) {
                                                res.send(err);
                                            } else {
                                                Gym.findById(req.body.gym)
                                                    .exec(function (err, response) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            var newMemberToGym = response.members;
                                                            newMemberToGym.push(userID);
                                                            var newGymObj = {
                                                                members: newMemberToGym
                                                            };
                                                            Gym.findByIdAndUpdate(req.body.gym, newGymObj)
                                                                .exec(function (err, response) {
                                                                    if (err) {
                                                                        res.send(err);
                                                                    }
                                                                });
                                                        }
                                                    });
                                                var token = jwt.sign({ _id: user._id }, config.secrets.session, { expiresInMinutes: 60 * 5 });
                                                res.json({ token: token });
                                            }
                                        });
                                }
                            });
                    }
                });
        }
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
exports.destroy = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};

/**
 * Change a users password
 */
exports.changePassword = function (req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    User.findById(userId, function (err, user) {
        if (user.authenticate(oldPass)) {
            user.password = newPass;
            user.save(function (err) {
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
exports.me = function (req, res, next) {
    var userId = req.user._id;
    User.findOne({
        _id: userId
    }, '-salt -hashedPassword', function (err, user) { // don't ever give out the password or salt
        if (err) return next(err);
        if (!user) return res.json(401);
        res.json(user);
    });
};

/**
 * Authentication callback
 */
exports.authCallback = function (req, res, next) {
    res.redirect('/');
};

//Added Mike's stuff

exports.getAllUsers = function (req, res) {
    User.find(req.query)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
};

exports.findByID = function (req, res) {
    User.findById(req.params.memberId)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
};

exports.getUsersByGym = function (req, res) {
    User.find({ gym: { $eq: req.params.gymID } })
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
};

exports.getUserDetails = function (req, res) {
    User.findById(req.params.memberId)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                var userObj = {
                    _id: response._id,
                    name: response.name,
                    gender: response.gender,
                    age: response.age,
                    weight: response.weight,
                    height: response.height,
                    goals: response.goals,
                    contact_info: response.contact_info
                };
                Gym.findById(response.gym)
                    .exec(function (err, response) {
                        if (err) {
                            res.send(err);
                        } else {
                            var gymObj = {
                                _id: response._id,
                                name: response.name
                            };
                            var newObj = {
                                user: userObj,
                                gym: gymObj
                            };
                            res.send(newObj);
                        }
                    });
            }
        });
};

exports.getUserLogos = function (req, res) {
    User.findById(req.params.memberId)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response.pathways[0]);
            }
        });
};

exports.getUserPathos = function (req, res) {
    User.findById(req.params.memberId)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response.pathways[1]);
            }
        });
};

exports.getUserEthos = function (req, res) {
    User.findById(req.params.memberId)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response.pathways[2]);
            }
        });
};

exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.body._id, req.body)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
};
////UPDATES A SPECIFIC USER'S SPECIFIC EVALUATION BASED ON TRIGGERS IN THE FRONT END////
exports.updateEvalStatus = function (req, res) {
    User.findById(req.body.userID)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                var pathways = response.pathways;
                for (var i = 0; i < pathways.length; i++) {
                    if (req.body.pathwayID == pathways[i]["_id"]) {
                        var stages = pathways[i]["stages"];
                        for (var x = 0; x < stages.length; x++) {
                            if (req.body.stageID == stages[x]["_id"]) {
                                var evaluations = stages[x]["evaluations"];
                                for (var y = 0; y < evaluations.length; y++) {
                                    if (req.body.evalID == evaluations[y]["_id"]) {
                                        console.log(evaluations[y]);
                                        if (evaluations[y]["needs_approval"] === true && evaluations[y]["pending"] === false) {
                                            response.pathways[i]["stages"][x]["evaluations"][y]["pending"] = true;
                                            User.findByIdAndUpdate(req.body.userID, response)
                                                .exec(function (err, response) {
                                                    if (err) {
                                                        res.send(err);
                                                    } else {
                                                        res.send(response);
                                                    }
                                                });
                                        } else if (evaluations[y]["needs_approval"] === true && evaluations[y]["pending"] === true) {
                                            response.pathways[i]["stages"][x]["evaluations"][y]["complete"] = true;
                                            var completeValue1 = response.pathways[i]["stages"][x]["evaluations"][y]["total_to_complete"];
                                            response.pathways[i]["stages"][x]["amount_completed"] += completeValue1;
                                            if (response.pathways[i]["stages"][x]["amount_completed"] === response.pathways[i]["stages"][x]["total_to_complete"]) {
                                                response.pathways[i]["stages"][x]["complete"] = true;
                                            }
                                            response.pathways[i]["completion"]["amount_completed"] += completeValue1;
                                            if (response.pathways[i]["completion"]["amount_completed"] === response.pathways[i]["completion"]["total_to_complete"]) {
                                                response.pathways[i]["completion"]["complete"] = true;
                                            }
                                            User.findByIdAndUpdate(req.body.userID, response)
                                                .exec(function (err, response) {
                                                    if (err) {
                                                        res.send(err);
                                                    } else {
                                                        res.send(response);
                                                    }
                                                });
                                        } else if (evaluations[y]["needs_approval"] === false && evaluations[y]["complete"] === false) {
                                            response.pathways[i]["stages"][x]["evaluations"][y]["complete"] = true;
                                            var completeValue2 = response.pathways[i]["stages"][x]["evaluations"][y]["total_to_complete"];
                                            response.pathways[i]["stages"][x]["amount_completed"] += completeValue2;
                                            if (response.pathways[i]["stages"][x]["amount_completed"] === response.pathways[i]["stages"][x]["total_to_complete"]) {
                                                response.pathways[i]["stages"][x]["complete"] = true;
                                            }
                                            response.pathways[i]["completion"]["amount_completed"] += completeValue2;
                                            if (response.pathways[i]["completion"]["amount_completed"] === response.pathways[i]["completion"]["total_to_complete"]) {
                                                response.pathways[i]["completion"]["complete"] = true;
                                            }
                                            User.findByIdAndUpdate(req.body.userID, response)
                                                .exec(function (err, response) {
                                                    if (err) {
                                                        res.send(err);
                                                    } else {
                                                        res.send(response);
                                                    }
                                                });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
};

exports.updateAnswer = function (req, res) {
    User.findById(req.body.userID)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                var pathways = response.pathways;
                for (var i = 0; i < pathways.length; i++) {
                    if (req.body.pathwayID == pathways[i]["_id"]) {
                        var stages = pathways[i]["stages"];
                        for (var x = 0; x < stages.length; x++) {
                            if (req.body.stageID == stages[x]["_id"]) {
                                var evaluations = stages[x]["evaluations"];
                                for (var y = 0; y < evaluations.length; y++) {
                                    if (req.body.evalID == evaluations[y]["_id"]) {
                                        response.pathways[i]["stages"][x]["evaluations"][y]["content"]["answer"] = req.body.answer;
                                        User.findByIdAndUpdate(req.body.userID, response)
                                            .exec(function (err, response) {
                                                if (err) {
                                                    res.send(err);
                                                } else {
                                                    res.send(response);
                                                }
                                            });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
};
////UPDATES WHETHER A SPECIFIC USER IS OR IS NOT AN ADMIN////
exports.userIsAdminUpdate = function (req, res) {
    User.findById(req.body.userID)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                console.log(response);
                response.is_admin = !response.is_admin;
                if (response.is_admin === true) {
                    response.role = "admin";
                } else if (response.is_admin === false) {
                    response.role = "user";
                }
                User.findByIdAndUpdate(req.body.userID, response)
                    .exec(function (err, response) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(response);
                        }
                    });
            }
        });
};
////UPDATES WHETHER A SPECIFIC USER IS OR IS NOT ACTIVE////
exports.userIsActiveUpdate = function (req, res) {
    console.log(req.body.userID);
    User.findById(req.body.userID)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                console.log(response);
                response.currently_active = !response.currently_active;
                User.findByIdAndUpdate(req.body.userID, response)
                    .exec(function (err, response) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(response);
                        }
                    });
            }
        });
};

exports.updateProgression = function (req, res) {
    User.findById(req.body.userID)
        .exec(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                var pathways = response.pathways;
                for (var i = 0; i < pathways.length; i++) {
                    if (req.body.pathwayID == pathways[i]["_id"]) {
                        var stages = pathways[i]["stages"];
                        for (var x = 0; x < stages.length; x++) {
                            if (req.body.stageID == stages[x]["_id"]) {
                                var evaluations = stages[x]["evaluations"];
                                for (var y = 0; y < evaluations.length; y++) {
                                    if (req.body.evalID == evaluations[y]["_id"]) {
                                        var progressions = evaluations[y]["content"]["progressions"];
                                        for (var z = 0; z < progressions.length; z++) {
                                            if (req.body.progID == progressions[z]["_id"]) {
                                                response.pathways[i]["stages"][x]["evaluations"][y]["content"]["progressions"][z]["complete"] = !progressions[z]["complete"];
                                                User.findByIdAndUpdate(req.body.userID, response)
                                                    .exec(function (err, response) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            res.send(response);
                                                        }
                                                    });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
};

////DELETE ONCE PUSHED LIVE////

/* For initial user add testing -- http://localhost:8555/api/add-user
{
    "name": {
        "first": "Mike",
        "last": "Buckley"
    };
    "gym": "5602fc16bfb07c49091b75d9"
}
*/

/* For testing user-evaluation-update -- http://localhost:8555/api/user-evaluation-update
{
    "userID": "5602fc2e4bca0072095351a5",
    "pathwayID": "5602df7192694e5da7fa4584",
    "stageID": "5602df7192694e5da7fa4585",
    "evalID": "5602df7192694e5da7fa4586"
}
*/

var User = require('./user.model'),
    Pathway = require('../pathway/pathway.model'),
    Gym = require('../gym/gym.model');

module.exports = {
    ////GETS ALL USER OBJECTS IN COLLECTION////
    getAllUsers: function (req, res) {
        User.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    ////GETS SPECIFIC USER OBJECT////
    findByID: function (req, res) {
        User.findById(req.params.memberId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    ////GETS SPECIFIC USER'S INFO////
    getUserDetails: function (req, res) {
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
    },
    ////GETS USER'S LOGOS PATHWAY////
    getUserLogos: function (req, res) {
        User.findById(req.params.memberId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response.pathways[0]);
                }
            });
    },
    ////GETS USER'S PATHOS PATHWAY////
    getUserPathos: function (req, res) {
        User.findById(req.params.memberId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response.pathways[1]);
                }
            });
    },
    ////GETS USER'S ETHOS PATHWAY////
    getUserEthos: function (req, res) {
        User.findById(req.params.memberId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response.pathways[2]);
                }
            });
    },
    ////ADDS NEW USER TO THE COLLECTION////
    addUser: function (req, res) {
        var newUser = new User(req.body);
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
                                            .exec(function (err, response) {
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
                                                                        } else {
                                                                            res.send(response);
                                                                        }
                                                                    });
                                                            }
                                                        });
                                                }
                                            });
                                    }
                                });
                        }
                    });
            }
        });
    },
    ////UPDATES SPECIFIC USER OBJECT////
    updateUser: function (req, res) {
        User.findByIdAndUpdate(req.body._id, req.body)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    ////UPDATES A SPECIFIC USER'S SPECIFIC EVALUATION BASED ON TRIGGERS IN THE FRONT END////
    updateEvalStatus: function (req, res) {
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
    },
    ////UPDATES WHETHER A SPECIFIC USER IS OR IS NOT AN ADMIN////
    userIsAdminUpdate: function (req, res) {
        User.findById(req.body.userID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    response.is_admin = !response.is_admin;
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
    },
    ////UPDATES WHETHER A SPECIFIC USER IS OR IS NOT ACTIVE////
    userIsActiveUpdate: function (req, res) {
        User.findById(req.body.userID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
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
    }
};

////DELETE ONCE PUSHED LIVE////

/* For initial user add testing -- http://localhost:8555/api/add-user
{
    "name": {
        "first": "Mike",
        "last": "Buckley"
    },
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

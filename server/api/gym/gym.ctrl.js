var Gym = require('./gym.model'),
    Pathway = require('../pathway/pathway.model'),
    mongoose = require('mongoose');

module.exports = {
    getAllGyms: function (req, res) {
        Gym.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    getGymNames: function (req, res) {
        Gym.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var gymsArr = [];
                    for (var i = 0; i < response.length; i++) {
                        var gymObj = {
                            _id: response[i]["_id"],
                            name: response[i]["name"],
                            active: response[i]["currently_active"]
                        };
                        gymsArr.push(gymObj);
                    }
                    res.send(gymsArr);
                }
            });
    },
    getGymDetails: function (req, res) {
        Gym.findById(req.params.gymId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var gymObj = {
                        _id: response._id,
                        name: response.name,
                        active: response.currently_active,
                        address: response.address,
                        contact_info: response.contact_info,
                        gym_details: response.gym_details
                    };
                    res.send(gymObj);
                }
            });
    },
    getGymPathway: function (req, res) {
        Gym.findById(req.params.gymId)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var gymObj = {
                        _id: response._id,
                        name: response.name,
                        pathways: response.gym_pathway_program
                    };
                    res.send(gymObj);
                }
            });
    },
    getStages: function (req, res) {
        Gym.findById(req.body.gymID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathways = response.gym_pathway_program;
                    var stagesArr = [];
                    for (var i = 0; i < pathways.length; i++) {
                        if (req.body.pathwayID == pathways[i]["_id"]) {
                            var stages = pathways[i]["stages"];
                            for (var x = 0; x < stages.length; x++) {
                                var stagesObj = {
                                    value: stages[x]["_id"],
                                    label: stages[x]["name"]
                                };
                                stagesArr.push(stagesObj);
                            }
                        }
                    }
                    res.send(stagesArr);
                }
            });
    },
    getEvaluations: function (req, res) {
        Gym.findById(req.body.gymID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathways = response.gym_pathway_program;
                    for (var i = 0; i < pathways.length; i++) {
                        if (req.body.pathwayID == pathways[i]["_id"]) {
                            var stages = pathways[i]["stages"];
                            for (var x = 0; x < stages.length; x++) {
                                if (req.body.stageID == stages[x]["_id"]) {
                                    res.send(stages[x]["evaluations"]);
                                }
                            }
                        }
                    }
                }
            });
    },
    getSpecificEval: function (req, res) {
        Gym.findById(req.body.gymID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathways = response.gym_pathway_program;
                    for (var i = 0; i < pathways.length; i++) {
                        if (req.body.pathwayID == pathways[i]["_id"]) {
                            var stages = pathways[i]["stages"];
                            for (var x = 0; x < stages.length; x++) {
                                if (req.body.stageID == stages[x]["_id"]) {
                                    var evaluations = stages[x]["evaluations"];
                                    for (var y = 0; y < evaluations.length; y++) {
                                        if (req.body.evalID == evaluations[y]["_id"]) {
                                            res.send(evaluations[y]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
    },
    saveGym: function (req, res) {
        Pathway.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var newGymObj = req.body;
                    newGymObj.gym_pathway_program = response[0]["pathway"];
                    var newGym = new Gym(newGymObj);
                    newGym.save(function (err, response) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(response);
                        }
                    });
                }
            });
    },
    updateGym: function (req, res) {
        Gym.findByIdAndUpdate(req.body._id, req.body)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    addEvaluation: function (req, res) {
        Gym.findById(req.body.gymID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathways = response.gym_pathway_program;
                    for (var i = 0; i < pathways.length; i++) {
                        if (req.body.pathwayID == pathways[i]["_id"]) {
                            var stages = pathways[i]["stages"];
                            for (var x = 0; x < stages.length; x++) {
                                if (req.body.stageID == stages[x]["_id"]) {
                                    var evalArr = stages[x]["evaluations"];
                                    var evaluations = [];
                                    for (var y = 0; y < evalArr.length; y++) {
                                        evaluations.push(evalArr[y]);
                                    }
                                    var newEvalObj = {
                                        _id: mongoose.Types.ObjectId(),
                                        name: req.body.name,
                                        content: {
                                            video: req.body.video,
                                            image: "",
                                            progressions: [
                                                {
                                                    explanation: "",
                                                    complete: false
                                                }
                                            ],
                                            explanation: req.body.description,
                                            question: "",
                                            answer: ""
                                        },
                                        total_to_complete: 0,
                                        complete: false,
                                        needs_approval: false
                                    };
                                    evaluations.push(newEvalObj);
                                    response.gym_pathway_program[i]["stages"][x]["evaluations"] = evaluations;
                                    Gym.findByIdAndUpdate(req.body.gymID, response)
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
            });
    },
    editEvaluation: function (req, res) {
        Gym.findById(req.body.gymID)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathways = response.gym_pathway_program;
                    for (var i = 0; i < pathways.length; i++) {
                        if (req.body.pathwayID == pathways[i]["_id"]) {
                            var stages = pathways[i]["stages"];
                            for (var x = 0; x < stages.length; x++) {
                                if (req.body.stageID == stages[x]["_id"]) {
                                    var evaluations = stages[x]["evaluations"];
                                    for (var y = 0; y < evaluations.length; y++) {
                                        if (req.body.evalID == evaluations[y]["_id"]) {
                                            response.gym_pathway_program[i]["stages"][x]["evaluations"][y]["name"] = req.body.name;
                                            response.gym_pathway_program[i]["stages"][x]["evaluations"][y]["content"]["video"] = req.body.video;
                                            response.gym_pathway_program[i]["stages"][x]["evaluations"][y]["content"]["explanation"] = req.body.description;
                                            Gym.findByIdAndUpdate(req.body.gymID, response)
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
    }
};

////DELETE ONCE PUSHED LIVE////

/* For testing adding new gym with Postman
{
    "name": "The Gorilla Joe"
}
*/

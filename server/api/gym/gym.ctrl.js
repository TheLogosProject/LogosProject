var Gym = require('./gym.model'),
    Pathway = require('../pathway/pathway.model');

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
    saveGym: function (req, res) {
        Pathway.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var pathwayCount = response[0]["pathway"];
                    for (var i = 0; i < pathwayCount.length; i++) {
                        var stagesCount = response[0]["pathway"][i]["stages"];
                        var stagesLength = stagesCount.length;
                        var x = 0;
                        while (x < stagesLength) {
                            response[0]["pathway"][i]["stages"][x]["total_to_complete"] = 100 / stagesLength;
                            var stagesValue = response[0]["pathway"][i]["stages"][x]["total_to_complete"];
                            var evaluationCount = response[0]["pathway"][i]["stages"][x]["evaluations"];
                            var evaluationLength = evaluationCount.length;
                            var y = 0;
                            while (y < evaluationLength) {
                                response[0]["pathway"][i]["stages"][x]["evaluations"][y]["total_to_complete"] = stagesValue / evaluationLength;
                                y++;
                            }
                            x++;
                        }
                    }
                    var newGymObj = req.body;
                    newGymObj.gym_pathway_program = [];
                    for (var y = 0; y < pathwayCount.length; y++) {
                        newGymObj.gym_pathway_program.push(response[0]["pathway"][y]);
                    }
                    console.log(newGymObj);
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
                    
                }
            });
    },
    editEvaluation: function (req, res) {

    }
};

/* For testing adding new gym with Postman
{
    "name": "The Gorilla Joe"
}
*/

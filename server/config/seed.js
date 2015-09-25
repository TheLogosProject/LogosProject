/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

var User = require('../api/user/user.model');
var Gym = require('../api/gym/gym.model');
var Pathway = require('../api/pathway/pathway.model');

Pathway.find({}).then(function (res) {
    if (res.length === 0) {
        Pathway.create(
            {
                "pathway": [
                    {
                        "name": "Logos",
                        "completion": {
                            "amount_completed": 0,
                            "total_to_complete": 100,
                            "complete": false
                        },
                        "stages": [
                            {
                                "name": "Stage 1",
                                "amount_completed": 0,
                                "total_to_complete": 0,
                                "complete": false,
                                "evaluations": [
                                    {
                                        "name": "Excersize 1",
                                        "content": {
                                            "video": "https://www.youtube.com/watch?v=8A6Uai5sQVw",
                                            "image": "http://www.70sbig.com/wp-content/uploads/2012/03/halfsquat-fuck.jpg",
                                            "progressions": [
                                                {
                                                    "explanation": "Run 100 yards.",
                                                    "complete": false
                                                }
                                            ],
                                            "explanation": "Here is an explanation for this excersize.",
                                            "question": "",
                                            "answer": "",
                                            "complete": false,
                                            "completed_on": ""
                                        },
                                        "total_to_complete": 0,
                                        "complete": false,
                                        "needs_approval": true,
                                        "approved_by": "",
                                        "approved_on": "",
                                        "approved": false
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
            ).then(function (res) {
                Pathway.find({})
                    .exec(function (err, response) {
                        var newGymObj = {
                            "name": "Generator CrossFit"
                        };
                        newGymObj.gym_pathway_program = response[0].pathway;
                        Gym.create(newGymObj).then(function (res) {
                            Gym.findById(res._id)
                                .exec(function (err, response) {
                                    var newUserObj = {
                                        "name": {
                                            "first": "Chaco",
                                            "last": "Taco"
                                        },
                                        "email": "test@test.com",
                                        "password": "abc",
                                        "provider": "local",
                                        "is_admin": false,
                                        "is_master": true
                                    };
                                    newUserObj.gym = response._id;
                                    User.create(newUserObj).then(function (res) {
                                        var userID = res._id;
                                        User.findById(userID)
                                            .populate('gym')
                                            .exec(function (err, response) {
                                                var newUserObj = response;
                                                Gym.findById(response.gym._id)
                                                    .exec(function (err, response) {
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
                                                                Gym.findById(response.gym)
                                                                    .exec(function (err, response) {
                                                                        var newMemberToGym = [];
                                                                        newMemberToGym.push(userID);
                                                                        var newGymObj = {
                                                                            "members": newMemberToGym
                                                                        };
                                                                        Gym.findByIdAndUpdate(response._id, newGymObj);
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                                });
                        });
                    });

            });
    }
});
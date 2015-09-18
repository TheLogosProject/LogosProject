var User = require('./user.model'),
    Pathway = require('../pathway/pathway.model'),
    Gym = require('../gym/gym.model');

module.exports = {
    find: function (req, res) {
        User.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
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
    initialSave: function (req, res) {
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
                            var logos = response.gym.gym_pathway_program.logos;
                            var pathos = response.gym.gym_pathway_program.pathos;
                            var ethos = response.gym.gym_pathway_program.ethos;
                            newUserObj.pathways = {
                                logos: logos,
                                pathos: pathos,
                                ethos: ethos
                            };
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
};

/* For initial user add testing
{
    "name": {
        "first": "Mike",
        "last": "Buckley"
    },
    "gym": "55fc1f3d0ea7d9f2f5df16fe"
}
*/

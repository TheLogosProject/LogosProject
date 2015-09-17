var User = require('./user.model'),
    Pathway = require('../pathway/pathway.model');

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
        User.findById(req.params.id)
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
                                        res.send(response);
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
        "first": "John",
        "last": "Buckley"
    },
    "gym": "55f8c47ba11f9a255010bd91",
    "is_master": false,
    "is_admin": false,
    "currently_active": true
}
*/

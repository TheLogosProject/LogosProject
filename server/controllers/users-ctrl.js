var User = require('../models/users'),
    Pathway = require('../models/pathways');

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
                            Pathway.populate(response, {
                                path: 'gym.gym_pathway_program.logos'
                            }, function (err, response) {
                                if (err) {
                                    res.send(err);
                                } else {
                                    console.log("!!!!!!!!!!", response, "!!!!!!!!!!!");
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
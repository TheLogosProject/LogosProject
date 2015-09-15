var Gym = require('../models/gyms');

module.exports = {
    find: function (req, res) {
        Gym.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    save: function (req, res) {
        var newGym = new Gym(req.body);
        newGym.save(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
    }
};
var Pathway = require('./pathway.model');

module.exports = {
    find: function (req, res) {
        Pathway.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
    },
    save: function (req, res) {
        var newPathway = new Pathway(req.body);
        newPathway.save(function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        });
    }
};

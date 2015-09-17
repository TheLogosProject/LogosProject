var Gym = require('./gym.model'),
    Pathway = require('../pathway/pathway.model');

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
        var newGymObj = req.body;
        Pathway.find(req.query)
            .exec(function (err, response) {
                if (err) {
                    res.send(err);
                } else {
                    var logos = response[0]["pathway"]["0"];
                    var pathos = response[0]["pathway"]["1"];
                    var ethos = response[0]["pathway"]["2"];
                    newGymObj.gym_pathway_program = {
                        logos: logos,
                        pathos: pathos,
                        ethos: ethos
                    };
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
    }
};

/* For testing adding new gym with Postman
{
    "name": "The Gorilla Joe",
    "admin": "55f8c5fd35fb603e5387d01a",
    "currently_active": true
}
*/

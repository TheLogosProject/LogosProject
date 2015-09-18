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
                    var logos = response[0]["pathway"]["0"];
                    var pathos = response[0]["pathway"]["1"];
                    var ethos = response[0]["pathway"]["2"];
                    var newGymObj = req.body;
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
}
*/

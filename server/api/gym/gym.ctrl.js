var Gym = require('./gym.model'),
    Pathway = require('./pathway.model');

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
                    var basePathways = response[0]["pathway"]["0"]["stages"]["0"]["evaluations"]["0"]["content"];
                    console.log("*******",basePathways,"*******");
                    res.send(response);
                    // var newGym = new Gym(req.body);
                    // newGym.save(function (err, response) {
                    //     if (err) {
                    //         res.send(err);
                    //     } else {
                    //         res.send(response);
                    //     }
                    // });
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

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

////DELETE ONCE PUSHED LIVE////

//For testing with Postman, please don't change this info!
/*
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
*/
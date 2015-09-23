var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PathwaySchema = new Schema({
    pathway: [
        {
            name: { type: String },
            completion: {
                amount_completed: { type: Number, default: 0 },
                total_to_complete: { type: Number, default: 100 },
                complete: { type: Boolean, default: false }
            },
            stages: [
                {
                    name: { type: String },
                    amount_completed: { type: Number, default: 0 },
                    total_to_complete: { type: Number },
                    complete: { type: Boolean, default: false },
                    evaluations: [
                        {
                            name: { type: String },
                            content: {
                                video: { type: String },
                                image: { type: String },
                                progressions: [
                                    {
                                        explanation: { type: String },
                                        complete: { type: Boolean, default: false }
                                    }
                                ],
                                explanation: { type: String },
                                question: { type: String },
                                answer: { type: String },
                                complete: { type: Boolean, default: false },
                                completed_on: { type: Date }
                            },
                            total_to_complete: { type: Number },
                            complete: { type: Boolean, default: false },
                            needs_approval: { type: Boolean, default: false }
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Pathway', PathwaySchema);

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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 2",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 3",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 4",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                }
            ]
        },
        {
            "name": "Pathos",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 2",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 3",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 4",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                }
            ]
        },
        {
            "name": "Ethos",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 2",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 3",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                },
                {
                    "name": "Stage 4",
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
                        {
                            "name": "Excersize 2",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bSZj19AUU5I",
                                "image": "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/bootcamp-squat-hold.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump 10 times.",
                                        "complete": true
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 3",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=uNrqrk2xcAo",
                                "image": "http://www1.pretty52.com/images/content/54e207a284ef9.jpg",
                                "progressions": [
                                    {
                                        "explanation": "",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        },
                        {
                            "name": "Excersize 4",
                            "content": {
                                "video": "https://www.youtube.com/watch?v=bgyebWOm3fY",
                                "image": "https://proactiveoutside.files.wordpress.com/2014/01/goblet.jpg",
                                "progressions": [
                                    {
                                        "explanation": "Jump rope.",
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
                            "needs_approval": false,
                            "approved_by": "",
                            "approved_on": "",
                            "approved": false
                        }
                    ]
                }
            ]
        }
    ]
}
*/

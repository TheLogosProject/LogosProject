var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newPathwaySchema = new Schema({
    name: { type: String },
    completion: {
        amount_completed: { type: Number, default: 0 },
        total_to_complete: { type: Number, default: 100 },
        complete: { type: Boolean, default: false }
    },
    stages: [
        {
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
                        completed_on: { type: String }
                    },
                    total_to_complete: { type: Number },
                    complete: { type: Boolean, default: false },
                    needs_approval: { type: Boolean, default: false },
                    //If needs approval is set to true, keys and values below will populate
                    approved_by: { type: String },
                    approved_on: { type: String },
                    approved: { type: Boolean, default: false }
                }
            ]
        }
    ]
});

module.exports = mongoose.model('pathways', newPathwaySchema);

//For testing with Postman
/*
{
    "name": "test",
    "completion": {
        "amount_completed": 0,
        "total_to_complete": 100,
        "complete": false
    },
    "stages": [{
        "amount_completed": 0,
        "total_to_complete": 10,
        "complete": false,
        "evaluations": [{
            "name": "test",
            "content": {
                "video": "test",
                "image": "test",
                "progressions": [{
                    "explanation": "test",
                    "complete": false
                }],
                "explanation": "test",
                "question": "test",
                "answer": "test",
                "complete": false,
                "completed_on": "test"
            },
            "total_to_complete": 10,
            "complete": false,
            "needs_approval": false,
            "approved_by": "test",
            "approved_on": "test",
            "approved": false
        }]
    }]
}
*/
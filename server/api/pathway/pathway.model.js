var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newPathwaySchema = new Schema({
    pathway: [
        {
            name: { type: String },
            is_active: { type: Boolean },
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
                                answer: { type: String }
                            },
                            total_to_complete: { type: Number },
                            complete: { type: Boolean, default: false },
                            needs_approval: { type: Boolean, default: false },
                            pending: { type: Boolean, default: false }
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = mongoose.model('pathways', newPathwaySchema);
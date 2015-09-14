var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newPathwaySchema = new Schema({
    name: {},
    completion: {
        amount_completed: { type: Number, default: 0 },
        total_to_complete: { type: Number, default: 100 },
        complete: { type: Boolean, default: false }
    },
    stages: [{
        amount_completed: { type: Number, default: 0 },
        total_to_complete: { type: Number },
        complete: { type: Boolean, default: false },
        evaluations: [{
            name: { type: String },
            content: {
                video: { type: String },
                image: { type: String },
                progressions: [{
                   explanation: { type: String },
                   complete: { type: Boolean, default: false }
                }],
                explanation: { type: String },
                question: { type: String },
                answer: { type: String },
                complete: { type: Boolean, default: false },
                completed_on: { type: Date }
            },
            total_to_complete: { type: Number },
            complete: { type: Boolean, default: false },
            needs_approval: { type: Boolean, default: false },
            //If needs approval is set to true, keys and values below will populate
            approved_by: { type: String },
            approved_on: { type: Date },
            approved: { type: Boolean, default: false }

        }]
    }]
});

module.exports = mongoose.model('pathways', newPathwaySchema);
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name: {
        first: { type: String },
        last: { type: String }
    },
    gender: { type: String, default: "" },
    age: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    height: {
        feet: { type: String, default: "" },
        inches: { type: String, default: "" }
    },
    contact_info: {
        phone: { type: String, default: "" },
        email: { type: String, default: "" }
    },
    gym: { type: Schema.Types.ObjectId, ref: 'gyms' },
    goals: [
        { type: String, default: "" }
    ],
    get_to_know: {
        questions: [
            { type: Schema.Types.ObjectId, ref: 'gyms' }
        ],
        answers: [
            { type: String }
        ]
    },
    pathways: { type: Array },
    login_details: {
        email: { type: String },
        hashed_password: { type: String },
        salt: { type: String },
        provider: { type: String },
        role: { type: String }
    },
    is_master: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    currently_active: { type: Boolean, default: true }
});

module.exports = mongoose.model('users', newUserSchema);
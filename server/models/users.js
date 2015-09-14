var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newUserSchema = new Schema({
    name: {
        first: { type: String },
        last: { type: String }
    },
    gender: { type: String },
    age: { type: Number },
    weight: { type: Number },
    contact_info: {
        phone: { type: String },
        email: { type: String }
    },
    gym: { type: Schema.Types.ObjectId, ref: 'gyms' },
    goals: [{ type: String }],
    get_to_know: {
        questions: [{ type: Schema.Types.ObjectId, ref: 'gyms' }],
        answers: [{ type: String }]
    },
    pathways: {
        logos: { type: Schema.Types.ObjectId, ref: 'pathways' },
        pathos: { type: Schema.Types.ObjectId, ref: 'pathways' },
        ethos: { type: Schema.Types.ObjectId, ref: 'pathways' }
    },
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
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newGymSchema = new Schema({
    name: { type: String },
    address: {
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" }
    },
    contact_info: {
        phone: { type: String, default: "" },
        email: { type: String, default: "" }
    },
    admin: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ],
    members: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ],
    gym_details: {
        hours_of_operation: { type: String },
        website: { type: String, default: "" },
        about_us: { type: String, default: "" },
        gym_logo: { type: String, default: "" }
    },
    gym_pictures: { type: String },
    gym_pathway_program: { type: Array },
    get_to_know_questions: [
        { type: String }
    ],
    currently_active: { type: Boolean, default: true }
});

module.exports = mongoose.model('gyms', newGymSchema);
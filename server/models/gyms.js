var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var newGymSchema = new Schema({
    name: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    },
    contact_info: {
        phone: { type: String },
        email: { type: String }
    },
    admin: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ],
    members: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ],
    gym_details: {
        hours_of_operation: { type: String },
        website: { type: String },
        about_us: { type: String },
        gym_logo: { type: String }
    },
    gym_pictures: { type: String },
    gym_pathway_program: {
        logos: { type: Schema.Types.ObjectId, ref: 'pathways' },
        pathos: { type: Schema.Types.ObjectId, ref: 'pathways' },
        ethos: { type: Schema.Types.ObjectId, ref: 'pathways' }
    },
    get_to_know_questions: [
        { type: String }
    ],
    currently_active: { type: Boolean }
});

module.exports = mongoose.model('gyms', newGymSchema);

//For testing with Postman
/*{
    "name": "test",
    "address": {
        "street": "test",
        "city": "test",
        "state": "test",
        "zip": "test"
    },
    "contact_info": {
        "phone": "test",
        "email": "test"
    },
    "admin": "55d6199bfcce565a1a3e9e71",
    "members": "55d6199bfcce565a1a3e9e71",
    "gym_details": {
        "hours_of_operation": "test",
        "website": "test",
        "about_us": "test",
        "gym_logo": "test"
    },
    "gym_pictures": "test",
    "gym_pathway_program": {
        "logos": "55d6199bfcce565a1a3e9e71",
        "pathos": "55d6199bfcce565a1a3e9e71",
        "ethos": "55d6199bfcce565a1a3e9e71"
    },
    "get_to_know_questions": "test",
    "currently_active": false
}*/
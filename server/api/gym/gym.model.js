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

//For testing with Postman, please don't change this info!
/*
{
    "name": "The Gorilla Joe",
    "address": {
        "street": "123 Ripped St.",
        "city": "Hanford",
        "state": "CA",
        "zip": "93230"
    },
    "contact_info": {
        "phone": "559-584-1234",
        "email": "gorillajoecf@gjcrossfit.com"
    },
    "admin": "55f8c5fd35fb603e5387d01a",
    "members": "55f8c5fd35fb603e5387d01a",
    "gym_details": {
        "hours_of_operation": "Monday-Friday: 7:00AM - 10:00PM, Saturday: 9:00AM - 4:00PM, Sunday: Closed",
        "website": "www.gjcrossfit.com",
        "about_us": "We are a bad ass crossfit gym who doesn't f around",
        "gym_logo": "http://onedaylate.com/images/angry_gorilla.png"
    },
    "gym_pictures": "test",
    "gym_pathway_program": {
        "logos": "55f8d7abbe359ba670c4ae26",
        "pathos": "55f8d7abbe359ba670c4ae01",
        "ethos": "55f8d7abbe359ba670c4addc"
    },
    "get_to_know_questions": "How did you hear about crossfit?",
    "currently_active": true
}
*/

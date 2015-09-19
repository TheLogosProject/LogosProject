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

//For testing with Postman, please don't change this info!
/*
{
    "name": {
        "first": "Mike",
        "last": "Buckley"
    },
    "gender": "Male",
    "age": 28,
    "weight": 205,
    "contact_info": {
        "phone": "559-430-9293",
        "email": "que.onda.buckley@gmail.com"
    },
    "gym": "55f8c47ba11f9a255010bd91",
    "goals": [
        "Lift 100lbs. by November 1st, 2015"
    ],
    "get_to_know": {
        "questions": [
            "55f75fe457a73b1ae912dad1" /////THIS NEEDS TO BE FIXED/////
        ],
        "answers": [
            "I heard about it from friends."
        ]
    },
    "pathways": {
        "logos": "55f8d7abbe359ba670c4ae26",
        "pathos": "55f8d7abbe359ba670c4ae01",
        "ethos": "55f8d7abbe359ba670c4addc"
    },
    "login_details": {
        "email": "que.onda.buckley@gmail.com",
        "hashed_password": "blahblahblah",
        "salt": "test",
        "provider": "test",
        "role": "test"
    },
    "is_master": false,
    "is_admin": true,
    "currently_active": true
}
*/
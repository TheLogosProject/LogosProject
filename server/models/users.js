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
    goals: [
        { type: String }
    ],
    get_to_know: {
        questions: [
            { type: Schema.Types.ObjectId, ref: 'gyms' }
        ],
        answers: [
            { type: String }
        ]
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

//For testing with Postman
/*
{
    "name": {
        "first": "test",
        "last": "test"
    },
    "gender": "test",
    "age": 10,
    "weight": 10,
    "contact_info": {
        "phone": "test",
        "email": "test"
    },
    "gym": "55f75fe457a73b1ae912dad1",
    "goals": [
        "test"
    ],
    "get_to_know": {
        "questions": [
            "55f75fe457a73b1ae912dad1"
        ],
        "answers": [
            "test"
        ]
    },
    "pathways": {
        "logos": "55f75fe457a73b1ae912dad1",
        "pathos": "55f75fe457a73b1ae912dad1",
        "ethos": "55f75fe457a73b1ae912dad1"
    },
    "login_details": {
        "email": "test",
        "hashed_password": "test",
        "salt": "test",
        "provider": "test",
        "role": "test"
    },
    "is_master": false,
    "is_admin": false,
    "currently_active": true
}
*/
(function () {
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var crypto = require('crypto');
    var authTypes = ['github', 'twitter', 'facebook', 'google'];

    var UserSchema = new Schema({
        name: {
            first: { type: String },
            last: { type: String }
        },
        email: { type: String, lowercase: true },
        hashedPassword: String,
        provider: String,
        role: { type: String, default: "admin" },
        salt: String,
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
        gym: { type: Schema.Types.ObjectId, ref: 'Gym' },
        goals: [
            { type: String, default: "" }
        ],
        get_to_know: {
            questions: [
                { type: Schema.Types.ObjectId, ref: 'Gym' }
            ],
            answers:
            { type: String, default: "" }
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

    /**
     * Virtuals
     */
    UserSchema
        .virtual('password')
        .set(function (password) {
            this._password = password;
            this.salt = this.makeSalt();
            this.hashedPassword = this.encryptPassword(password);
        })
        .get(function () {
            return this._password;
        });

    // Public profile information
    UserSchema
        .virtual('profile')
        .get(function () {
            return {
                'name': this.name,
                'role': this.role
            };
        });

    // Non-sensitive info we'll be putting in the token
    UserSchema
        .virtual('token')
        .get(function () {
            return {
                '_id': this._id,
                'role': this.role
            };
        });

    /**
     * Validations
     */

    // Validate empty email
    UserSchema
        .path('email')
        .validate(function (email) {
            if (authTypes.indexOf(this.provider) !== -1) return true;
            return email.length;
        }, 'Email cannot be blank');

    // Validate empty password
    UserSchema
        .path('hashedPassword')
        .validate(function (hashedPassword) {
            if (authTypes.indexOf(this.provider) !== -1) return true;
            return hashedPassword.length;
        }, 'Password cannot be blank');

    // Validate email is not taken
    UserSchema
        .path('email')
        .validate(function (value, respond) {
            var self = this;
            this.constructor.findOne({ email: value }, function (err, user) {
                if (err) throw err;
                if (user) {
                    if (self.id === user.id) return respond(true);
                    return respond(false);
                }
                respond(true);
            });
        }, 'The specified email address is already in use.');

    var validatePresenceOf = function (value) {
        return value && value.length;
    };

    /**
     * Pre-save hook
     */
    UserSchema
        .pre('save', function (next) {
            if (!this.isNew) return next();

            if (!validatePresenceOf(this.hashedPassword) && authTypes.indexOf(this.provider) === -1)
                next(new Error('Invalid password'));
            else
                next();
        });

    /**
     * Methods
     */
    UserSchema.methods = {
        /**
         * Authenticate - check if the passwords are the same
         *
         * @param {String} plainText
         * @return {Boolean}
         * @api public
         */
        authenticate: function (plainText) {
            return this.encryptPassword(plainText) === this.hashedPassword;
        },

        /**
         * Make salt
         *
         * @return {String}
         * @api public
         */
        makeSalt: function () {
            return crypto.randomBytes(16).toString('base64');
        },

        /**
         * Encrypt password
         *
         * @param {String} password
         * @return {String}
         * @api public
         */
        encryptPassword: function (password) {
            if (!password || !this.salt) return '';
            var salt = new Buffer(this.salt, 'base64');
            return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
        }
    };
    module.exports = mongoose.model('User', UserSchema);
} ());

const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: function(value) {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    region: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;
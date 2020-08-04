const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const generateAuthToken = function(userInfo, cb) {
    // Generate an auth token for the user
    if (userInfo) {
        try {
            var token = jwt.sign({ email: userInfo.email }, process.env.JWT_KEY);
            if (token) {
                cb(token);
            } else {
                cb(null);
            }
        } catch (error) {
            cb(null);
            console.log("Error: Error while genrating Token", error);
        }
    } else {
        cb(null);
    }
}

const isDuplicateCredentials = function(email, cb) {
    try {
        if (email) {
            User.findOne({ email: email }).then(function(userData, err) {
                if (userData) {
                    cb(true);
                } else {
                    cb(false);
                }
            });
        } else {
            cb(null);
            console.log("isDuplicateCredentials: Method email not found.")
        }
    } catch (error) {
        cb(null);
        console.log("Error: Error while checking user existance.", error);
    }

}

module.exports = {
    isDuplicateCredentials: isDuplicateCredentials,
    generateAuthToken: generateAuthToken
}
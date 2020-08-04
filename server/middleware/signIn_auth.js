const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const handleSignin = function(req, res, cb) {
    console.log("handleSignin");
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        console.log("email");
        cb("Email or Password not found.");
    } else {
        User.findOne({ email: email }).then(function(userData) {
            if (!userData) {
                cb("No User data available.");
            } else {
                bcrypt.compare(password, userData.password, function(err, res) {
                    if (res) {
                        console.log("bcrypt.compare:::::::::::::::", userData);
                        cb(userData);
                    } else {
                        console.log("Error while comparing Encryption.");
                        cb("Error while comparing Encryption.");
                    }
                });
            }
        })
    }
}

const getAuthTokenId = function(req, res, cb) {
    const cookieValues = req.headers.cookie || '';
    const token = cookieValues.split('token=')[1];
    if (token && req.body.email) {
        User.findOne({ email: req.body.email }).then(function(userData) {
            if (!userData && !userData.token) {
                cb(false);
            } else if (userData.token == token) {
                cb(true);
            } else {
                cb(false);
            }
        })
    } else {
        cb(false);
    }
}

const createSession = function(user, cb) {

    const token = jwt.sign({ email: user.email }, process.env.JWT_KEY);
    console.log("token",token);
    if (token) {
        User.updateOne({ email: user.email }, { token: token }).then(function(userData, err) {
            if (userData) {
                cb(token);
            } else {
                cb(false);
            }
        });
        
    } else {
        cb(false);
    }
};

module.exports = {
    handleSignin: handleSignin,
    createSession: createSession,
    getAuthTokenId: getAuthTokenId
}
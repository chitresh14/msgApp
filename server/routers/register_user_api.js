const bcrypt = require('bcryptjs');
const User = require('../models/User.js');

const userRegister = require('../middleware/register_user.js');

module.exports = function(req, res) {
    try {
        if (req.body && req.body.username && req.body.email && req.body.password && req.body.region) {
            var userData = req.body;
            // Check for User Exitance.
            userRegister.isDuplicateCredentials(req.body.email, function(isDuplicateExist) {
                if (!isDuplicateExist) {
                    var newUser = new User({
                        'username': req.body.username,
                        'email': req.body.email,
                        'password': req.body.password,
                        'region': req.body.region
                    });

                    userRegister.generateAuthToken(newUser, function(token) {
                        if (token) {
                            newUser.token = token;
                            if (newUser && newUser.email && newUser.password && newUser.token) {
                                bcrypt.hash(newUser.password, 8, function(err, hash) {
                                    if (hash) {
                                        newUser.password = hash;
                                        // registering new user
                                        newUser.save().then(function(userData, err) {
                                            if (userData) {
                                                res.status(201).send({ code: 201, token: token, msg: "Registration Successful." });
                                            } else {
                                                res.status(401).send({ code: 401, error: 'Error while registering user data!!.', error: error });
                                            }
                                        });
                                    } else {
                                        res.status(401).send({ code: 401, error: 'Error while hashing user data.' });
                                    }
                                });

                            } else {
                                res.status(401).send({ code: 401, error: 'User registeration information not found.' });
                            }
                        } else {
                            res.status(401).send({ code: 401, error: 'Error while retriving user token.' });
                        }
                    });

                } else {
                    res.status(409).send({ code: 409, msg: 'Username already Exits.' });
                }
            });

        } else {
            res.send({ code: 400, msg: "Missing user details for registration" });
        }
    } catch (error) {
        res.status(401).send({ code: 401, msg: 'Error while registering user data.', error: error });
    }
};
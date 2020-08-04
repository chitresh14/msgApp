const User = require('../models/User.js');
const signInAuth = require('../middleware/signIn_auth.js');


module.exports = function(req, res) {
    try {
        const cookieValues = req.headers.cookie || '';
        if (cookieValues) {
            signInAuth.getAuthTokenId(req, res, function(isAuthenticated) {
                console.log("isSignAuthenticated::", isAuthenticated)
                if (isAuthenticated) {
                    res.status(200).send({ code: 200, msg: "User Signed In" });
                } else {
                    res.status(401).send({ code: 401, msg: 'Unauthorized' });
                }
            });
        } else {
            signInAuth.handleSignin(req, res, function(data) {
                if (data && data['email']) {
                    try {
                        console.log("STrating createSession")
                        signInAuth.createSession(data, function(token) {
                            res.status(201).send({ code: 201, token: token });
                        })
                    } catch (error) {
                        res.status(400).send({ code: 400, error: error });
                    }

                } else {
                    res.status(400).send({ code: 400, msg: 'Error while authenticating user.' });
                }
            });
        }

    } catch (error) {
        res.status(401).send({ code: 401, error: error });
    }
};
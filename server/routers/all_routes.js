const express = require('express');
const registerUser = require('./register_user_api.js');
const userSignIn = require('./signin_api.js');
const path = require('path');

const router = express.Router();

// api to for user registration
router.post('/registerUser', function (req, res) {
	registerUser(req, res);
});

router.post('/signIn', function (req, res) {
	userSignIn(req, res);
});

router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/src/index.html")); 
});

module.exports = router;
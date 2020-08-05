const baseUrl = process.env.PORT;

function setCookie(cname, cvalue, exdays, cb) {
    var date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    return;
}

function userService($http) {
    this.registerUser = function(userData, cb) {
        $http.post(baseUrl + '/registerUser', userData)
            .then(function(response) {
                if (response && response.data) {
                    if (response.data.token) {
                        setCookie('email', userData.email, 0.5);
                        setCookie('token', response.data.token, 0.5);
                        cb(response);
                    } else {
                        console.log("Problem while retriving token");
                        cb(null);
                    }
                } else {
                    cb(null);
                    console.log("Handle Response Error.");
                }
            }, function(error) {
                if (error) {
                    cb(error);
                } else {
                    cb(null);
                    console.log("Handle Rejection.");
                }
            });
    }

    this.signInUser = function(loginData, cb) {
        $http.post(baseUrl + '/signIn', loginData)
            .then(function(response) {
                if (response && response.data) {
                    console.log(response);
                    if (response.data.token) {
                        setCookie('email', loginData.email, 0.5);
                        setCookie('token', response.data.token, 0.5);
                        cb(response);
                    } else {
                        cb(response);
                    }

                } else {
                    cb(null);
                    console.log("Handle Response Error.");
                }
            }, function(error) {
                if (error) {
                    cb(error);
                } else {
                    cb(null);
                    console.log("Handle Rejection.");
                }
            });
    }
}

angular.module('userServiceModule', [])
    .service('userService', ['$http', userService]);
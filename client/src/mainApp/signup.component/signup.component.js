'use strict';

// Register `signUpComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('signUpComponent', {
    templateUrl: '/src/mainApp/signup.component/signup.component.html',
    controller: ['userService',
        function signUpController(userService) {

            var signUpVm = this;
            signUpVm.email = null;
            signUpVm.username = null;
            signUpVm.region = null;
            signUpVm.confirmPassword = null;
            signUpVm.password = null;
            signUpVm.isEmailExist = false;
            signUpVm.isRegisterError = false
            var isValidUser = false;


            // Methode to check password and confirmParswword Match.
            signUpVm.isPasswordMatch = function() {
                if (signUpVm.password === signUpVm.confirmPassword) {
                    return true;
                } else {
                    return false;
                }
            }

            //Method for user validation
            function userValidation() {
                if (signUpVm.email && signUpVm.username && signUpVm.region && signUpVm.confirmPassword && signUpVm.password) {
                    return signUpVm.isPasswordMatch();
                } else {
                    return false;
                }
            }

            function retriveUserData() {
                return {
                    "email": signUpVm.email,
                    "region": signUpVm.region,
                    "username": signUpVm.username,
                    "password": signUpVm.password
                }
            }

            //registerUser call the service and maintain the session of register user.
            signUpVm.registerUser = function() {
                if (userValidation()) {
                    userService.registerUser(retriveUserData(), function(response) {
                        if (response && response.data && response.data.code == 201 && response.data.msg) {
                            signUpVm.isEmailExist = false;
                            signUpVm.isRegisterError = false;
                        } else if (response && response.data && response.data.code == 409) {
                            signUpVm.isEmailExist = true;
                            signUpVm.isRegisterError = false;
                        } else {
                            signUpVm.isRegisterError =  true;
                            console.log("Something went wrong. PLease try again later.")
                        }
                    });
                }
            }
        }
    ]
});
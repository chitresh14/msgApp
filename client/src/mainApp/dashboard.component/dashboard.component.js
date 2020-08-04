'use strict';

// Register `dashboardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('dashboardComponent', {
    templateUrl: '/src/mainApp/dashboard.component/dashboard.component.html',
    controller: ['userService',
        function dashboardController(userService) {

        }
    ]
});
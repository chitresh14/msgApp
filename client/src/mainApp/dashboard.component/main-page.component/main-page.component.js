'use strict';

// Register `dashboardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('mainPageComponent', {
    templateUrl: '/src/mainApp/dashboard.component/main-page.component/main-page.component.html',
    controller: ['userService',
        function mainPageController(userService) {

        }
    ]
});
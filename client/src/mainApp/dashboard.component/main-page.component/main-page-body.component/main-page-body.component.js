'use strict';

// Register `dashboardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('mainBodyPageComponent', {
    templateUrl: '/src/mainApp/dashboard.component/main-page.component/main-page-body.component/main-page-body.component.html',
    controller: ['userService',
        function mainBodyPageController(userService) {

        }
    ]
});
'use strict';

// Register `dashboardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('dashboardBodyComponent', {
    templateUrl: '/src/mainApp/dashboard.component/dashboard-body.component/dashboard-body.component.html',
    controller: ['userService',
        function dashboardBodyController(userService) {
        	var mainVm = this;
        	mainVm.cardDetails = [{
                "title": "Title 1",
                "details": "Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here",
                "navigateTo": "/"
            },
            {
                "title": "Title 2",
                "details": "Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 2",
                "navigateTo": "/"
            },
            {
                "title": "Title 3",
                "details": "Aliquam at porta dolor. Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 3",
                "navigateTo": "/"
            },
            {
                "title": "Title 4",
                "details": "Aliquam at porta dolor. Sed et odio in purus dapibus pulvinar. Aliquam erat volutpat. Nullam interdum placerat ligula in hendrerit.",
                "btnTitle": "Click Here 4",
                "navigateTo": "/"
            }]

        }
    ]
});
'use strict';

// Register `footerComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('footerComponent', {
    templateUrl: '/src/mainApp/dashboard.component/footer.component/footer.component.html',
    controller: ["$scope",
        function footerController($scope) {
            
        }
    ]
});
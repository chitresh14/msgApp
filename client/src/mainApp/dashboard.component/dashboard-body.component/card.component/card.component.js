'use strict';

// // Register `mainCardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('cardComponent', {
    bindings: { cardContents: "<" },
    templateUrl: '/src/mainApp/dashboard.component/dashboard-body.component/card.component/card.component.html',
    controller: ["$scope",
        function cardComponentController($scope) {
            var cardVm = this;
        }
    ]
});
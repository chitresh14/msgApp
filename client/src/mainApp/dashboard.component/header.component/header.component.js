'use strict';

// Register `headerComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('headerComponent', {
    templateUrl: '/src/mainApp/dashboard.component/header.component/header.component.html',
    controller: ["$scope", '$location',
        function headerController($scope, $location) {
            var headerVm = this;
            headerVm.renderDropDownMenu =  function() {
                var elem = document.getElementById("headerDropdoenClick");
                // Appending class name i.e. slide-left__unorderd_list mobile_responsive_nav for mobile
                if (elem.className === "slide-left__unorderd_list") {
                    elem.className += " mobile_responsive_nav";
                } else {
                	elem.className = "slide-left__unorderd_list"
                }
            }

            headerVm.navigateTo = function(pageId){
                $location.path( "/" + pageId );
            }
        }
    ]
});
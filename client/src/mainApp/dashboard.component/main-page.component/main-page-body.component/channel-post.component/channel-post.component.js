'use strict';

// Register `dashboardComponent` component, along with its associated controller and template
angular.
module('mainModule').
component('channelPostComponent', {
    templateUrl: '/src/mainApp/dashboard.component/main-page.component/main-page-body.component/channel-post.component/channel-post.component.html',
    controller: ['userService',
        function channelPostController(userService) {
            var channelPostVm = this;
            channelPostVm.isEditMode = false;

            channelPostVm.editMode = function() {
            	channelPostVm.isEditMode = true;
            }

            channelPostVm.disableEditMode = function() {
            	channelPostVm.isEditMode = false;
            }

            
        }
    ]
});
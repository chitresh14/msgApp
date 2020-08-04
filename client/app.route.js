'use strict';

angular.
  module('teamMsgApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('*');
      $routeProvider.
        when('/signin', {
            template: '<main-app-component></main-app-component>'
        }).
        when('/dashboard', {
            template: '<dashboard-component></dashboard-component>'
        }).
        when('/home', {
            template: '<main-page-component></main-page-component>'
        }).
        otherwise('/signin');
    }
  ]);
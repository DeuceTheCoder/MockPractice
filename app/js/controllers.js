'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  .controller('SampleController', ['$scope', 'SampleService', function($scope, SampleService) {
    SampleService.callget().
      success( function() {
          console.log("successful");
      }
      .error(function() {
          console.log("errorful");
      }
  }]);

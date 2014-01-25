'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    factory('SampleService', ['$http', function($http) {
        return function() {
            return $http.get('localhost:8080/fail');
        }
    }]);

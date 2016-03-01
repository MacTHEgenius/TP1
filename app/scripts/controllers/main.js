'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
angular.module('tp1App')
  .controller('MainCtrl', function ($scope, $location) {
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('actionsController', function ($scope, action) {
	
	$scope.actions=[];
	
	$scope.getActions = function(){
		$scope.actions=action.query();
	}
	
	$scope.getActions();
});

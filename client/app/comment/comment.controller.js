'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('commentController', function ($scope, $http) {
	$scope.showServerError=false;
	$scope.datas={};
	$scope.query=function(){
		$http.get("http://localhost:3000/db").then(
			function successCallback(response) {
   				$scope.datas=response.data.comments;
			}, function errorCallback() {
				$scope.showServerError=true;
			}
		);
	};
	$scope.query();
});

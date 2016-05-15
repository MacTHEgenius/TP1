'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('loginController', function ($scope, LoginPost, $rootScope, $cookies, ConnectionService, action) {
	$scope.showForm=true;
	$scope.userConnected=ConnectionService.getUser().userConnected;
	$scope.serverError=false;
	$scope.valid=function(){
		return $scope.loginForm.$valid;
	}
	$scope.submit=function(){
		if($scope.valid())
		{
			LoginPost.save({username:$scope.emailM, password:$scope.passwordM}, function(responce){
				$scope.showForm=false;
				$scope.serverError=false;
				ConnectionService.setUser({userJwt:responce.token, userEmail:responce.data.username, userConnected:true});
				action.save({body:"User logged"});
			}, function(error)
			{
				$scope.serverError=true;
			});
		}
		else
		{
			$scope.loginForm.emailInput.$touched=true;
			$scope.loginForm.passwordInput.$touched=true;
		}
	}
	$scope.disconnect=function(){
		action.save({body:"User disconnected"}, function(success){
			$scope.showForm=true;
			ConnectionService.clearUser();
			$scope.userConnected=ConnectionService.getUser().userConnected;
		}, function(error){
			$scope.showForm=true;
			ConnectionService.clearUser();
			$scope.userConnected=ConnectionService.getUser().userConnected;
		});
	}
});

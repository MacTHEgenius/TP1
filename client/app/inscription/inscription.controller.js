'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('inscriptionController', function ($scope) {
	$scope.showForm=true;
	$scope.isValid=function(){
    	return $scope.inscriptionForm.$valid && $scope.passwordM==$scope.confirmPasswordM;
	};
	$scope.submit=function(){
		if(!$scope.isValid())
		{
			$scope.inscriptionForm.firstnameInput.$touched=true;
			$scope.inscriptionForm.nameInput.$touched=true;
			$scope.inscriptionForm.emailInput.$touched=true;
			$scope.inscriptionForm.passwordInput.$touched=true;
			$scope.inscriptionForm.confirmPasswordInput.$touched=true;
		}
		else {$scope.showForm=false;}
	};
  });

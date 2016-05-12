'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('inscriptionController', function ($scope, RegisterPost) {
	$scope.showForm=true;
	$scope.serverError=false;
	$scope.answer={};
	$scope.isValid=function(){
    	return $scope.inscriptionForm.$valid;
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
		else
		{
			RegisterPost.save({email:$scope.emailM, password:$scope.passwordM, firstname:$scope.firstName, lastname:$scope.nameM}, function(responce){
				$scope.answer=responce;
				$scope.serverError=false;
				$scope.showForm=false;
			}, function(error) {
				$scope.answer=error;
				$scope.serverError=true;
			});
		}
	};
  });
myApp.directive("confirmPassword", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=confirmPassword"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.confirmPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});

'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('tp1App');
myApp.controller('inscriptionController', function ($scope) {
	$scope.showForm=true;
	$scope.showSubmitError=false;
    $scope.firstnameBlur=function(){
    	if($scope.firstName==undefined)$scope.firstName="";
    	$scope.inscriptionForm.firstnameInput.$touched=true;
		if($scope.firstName!="")
		{
			$scope.inscriptionForm.firstnameInput.$invalid=($scope.firstName.match('[^A-Za-z -]')!=null);
			$scope.inscriptionForm.firstnameInput.$error.firstnameValidator=($scope.firstName.match('[^A-Za-z -]')!=null);
		}
		else
		{
			$scope.inscriptionForm.firstnameInput.$invalid=true;
			$scope.inscriptionForm.firstnameInput.$error.firstnameValidator=false;
		}
	}
	$scope.nameBlur=function(){
    	if($scope.nameM==undefined)$scope.nameM="";
    	$scope.inscriptionForm.nameInput.$touched=true;
		if($scope.nameM!="")
		{
			$scope.inscriptionForm.nameInput.$invalid=($scope.nameM.match('[^A-Za-z -]')!=null);
			$scope.inscriptionForm.nameInput.$error.firstnameValidator=($scope.nameM.match('[^A-Za-z -]')!=null);
		}
		else
		{
			$scope.inscriptionForm.nameInput.$invalid=true;
			$scope.inscriptionForm.nameInput.$error.nameValidator=false;
		}
	}
	$scope.passwordBlur=function(){
    	if($scope.passwordM==undefined)$scope.passwordM="";
    	$scope.inscriptionForm.passwordInput.$touched=true;
    	if($scope.passwordM=="")$scope.inscriptionForm.passwordInput.$invalid=true;
		$scope.confirmPasswordBlur();
	}
	$scope.confirmPasswordBlur=function(){
    	if($scope.confirmPasswordM==undefined)$scope.confirmPasswordM="";
    	$scope.inscriptionForm.confirmPasswordInput.$touched=true;
		if($scope.confirmPasswordM!="")
		{
			$scope.inscriptionForm.confirmPasswordInput.$invalid=($scope.passwordM!=$scope.confirmPasswordM);
			$scope.inscriptionForm.confirmPasswordInput.$error.isNotSame=($scope.passwordM!=$scope.confirmPasswordM);
			$scope.inscriptionForm.confirmPasswordInput.$error.isSame=($scope.passwordM==$scope.confirmPasswordM);
		}
		else
		{
			$scope.inscriptionForm.confirmPasswordInput.$invalid=true;
			$scope.inscriptionForm.confirmPasswordInput.$error.isNotSame=false;
			$scope.inscriptionForm.confirmPasswordInput.$error.isSame=false;
		}
	}
	$scope.submit=function(){
		if($scope.inscriptionForm.firstnameInput.$invalid ||
		$scope.inscriptionForm.nameInput.$invalid ||
		$scope.inscriptionForm.emailInput.$invalid ||
		$scope.inscriptionForm.passwordInput.$invalid ||
		$scope.inscriptionForm.confirmPasswordInput.$invalid)
		{
			$scope.showSubmitError=true;
			$scope.firstNameBlur();
			$scope.nameBlur();
			$scope.inscriptionForm.emailInput.$touched=true;
			$scope.passwordBlur();
			$scope.confirmPasswordBlur();
		}
		else $scope.showForm=false;
	}
  });

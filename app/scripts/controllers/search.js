'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('tp1App');
myApp.controller('searchController', function ($scope, $http) {
	$scope.showMovies=false;
	$scope.showEmptyError=false;
	$scope.showServerError=false;
	$scope.totalResults=0;
	$scope.datas=[];
	$scope.submit=function(){
		if($scope.searchM==undefined){$scope.searchM="";}
		if($scope.searchM=="")
		{
			$scope.showEmptyError=true;
			$scope.showMovies=false;
			return;
		}
		else
		{
			$scope.showEmptyError=false;
		}
		$http.get('http://omdbapi.com/', {params : {s : $scope.searchM}, timeout : 500}).then(
   		function successCallback(response) {
   			$scope.showServerError=false;
   			$scope.showMovies=true;
   			$scope.totalResults=response.data.totalResults;
   			$scope.datas=response.data.Search;
		}, function errorCallback() {
     		$scope.showServerError=true;
     		$scope.showMovies=false;
		});
	};
});

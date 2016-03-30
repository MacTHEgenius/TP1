'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('newMoviesController', function ($scope, $http) {
	$scope.showMovies=false;
	$scope.showServerError=false;
	$scope.datas=[];
	$scope.getFilms=function(){
		$http.get('https://omdbapi.com/', {params : {s : 'the', y : 2016, type: 'movie'}, timeout : 5000}).then(
		function successCallback(response) {
			if(response.data.Response=="False")
			{
				$scope.showMovies=false;
				$scope.showServerError=true;
				return;
			}
			$scope.showMovies=true;
			$scope.showServerError=false;
			$scope.datas=response.data.Search;
		}, function errorCallback() {
			$scope.showMovies=false;
			$scope.showServerError=true;
		});
	};
	$scope.getFilms();
});
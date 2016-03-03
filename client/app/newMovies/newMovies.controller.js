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
	$scope.getFilms=function(){$http.get('https://omdbapi.com/', {params : {s : 'the', y : 2016}, timeout : 2000}).then(
   	function successCallback(response) {
   		if(response.data.Response=="False")
   		{
   			$scope.showMovies=false;
   			$scope.showServerError=true;
    		return;
    	}
   		$scope.showMovies=true;
   		$scope.showServerError=false;
   		//ajoute le "s" pour https
   		for(var i=0; i<response.data.Search.length; i++)
   		{
   			if(response.data.Search[i].Poster!=="N/A")
   			{
   				response.data.Search[i].Poster=response.data.Search[i].Poster.substr(0, 4)+'s'+response.data.Search[i].Poster.substr(4);
   			}
   		}
   		$scope.datas=response.data.Search;
	}, function errorCallback() {
    	$scope.showMovies=false;
    	$scope.showServerError=true;
	});
	};
	$scope.getFilms();
});

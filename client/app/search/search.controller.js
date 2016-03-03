'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('searchController', function ($scope, $http) {
	$scope.showMovies=false;
	$scope.showEmptyError=false;
	$scope.showServerError=false;
	$scope.showNoResultError=false;
	$scope.totalResults=0;
	$scope.datas=[];
	$scope.submit=function(){
		if($scope.searchM===undefined){$scope.searchM="";}
		if($scope.searchM.length<2)
		{
			$scope.showEmptyError=true;
			$scope.showServerError=false;
			$scope.showMovies=false;
			$scope.showNoResultError=false;
			return;
		}
		else
		{
			$scope.showEmptyError=false;
		}
		$http.get('https://omdbapi.com/', {params : {s : $scope.searchM, type: 'movie'}, timeout : 2000}).then(
   		function successCallback(response) {
   			if(response.data.Response=="False")
   			{
   				$scope.showServerError=false;
     			$scope.showMovies=false;
     			$scope.showNoResultError=true;
     			return;
     		}
   			$scope.showServerError=false;
   			$scope.showMovies=true;
   			$scope.showNoResultError=false;
   			$scope.totalResults=response.data.totalResults;
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
     		$scope.showServerError=true;
     		$scope.showMovies=false;
     		$scope.showNoResultError=false;
		});
	};
});

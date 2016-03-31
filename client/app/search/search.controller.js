'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('searchController', function ($scope, $http, FavoritesService, ConnectionService) {
	$scope.showMovies=false;
	$scope.showEmptyError=false;
	$scope.showServerError=false;
	$scope.showNoResultError=false;
	$scope.totalResults=0;
	$scope.datas=[];
	$scope.userConnected=ConnectionService.getUser().userConnected;
	$scope.fillSelected=function(){
		FavoritesService.getAll().query({}, function(responce){
			for(var apiId in responce)
			{
				for(var data in $scope.datas)
				{
					if(responce[apiId].movie_id==$scope.datas[data].imdbID)
					{
						$scope.datas[data].isFavorite=true;
						$scope.datas[data].apiId=responce[apiId].id;
						if(responce[apiId].status==1)$scope.datas[data].isSelected=true;
						else $scope.datas[data].isSelected=false;
					}
				}
			}
		}, function(error){
			$scope.showServerError=true;
     		$scope.showMovies=false;
     		$scope.showNoResultError=false;
     		$scope.datas=[];
		});
	}
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
		$http.get('https://omdbapi.com/', {params : {s : $scope.searchM, type: 'movie'}, timeout : 5000}).then(
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
   			$scope.datas=response.data.Search;
   			if(ConnectionService.getUser().userConnected==true)
   			{
				$scope.fillSelected();
			}
		}, function errorCallback() {
     		$scope.showServerError=true;
     		$scope.showMovies=false;
     		$scope.showNoResultError=false;
     		$scope.datas=[];
		});
	};
	$scope.addFavorite=function(index){
		if($scope.datas[index].isFavorite)
		{
			FavoritesService.createNew().save({movie_id:$scope.datas[index].imdbID}, function(success){
				$scope.datas[index].apiId=success.id;
				FavoritesService.change().update({id:$scope.datas[index].apiId, movie_id:$scope.datas[index].imdbID, status:0});
			});
		}
		else
		{
			FavoritesService.change().delete({id:$scope.datas[index].apiId});
		}
		$scope.datas[index].selected=false;
	};
	$scope.addSelected=function(index){
		console.log($scope.datas[index]);
		if($scope.datas[index].isSelected)
		{
			FavoritesService.change().update({id:$scope.datas[index].apiId, movie_id:$scope.datas[index].imdbID, status:1});
		}
		else
		{
			FavoritesService.change().update({id:$scope.datas[index].apiId, movie_id:$scope.datas[index].imdbID, status:0});
		}
	};
});

'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('favoritesController', function ($scope, $http, FavoritesService) {
	$scope.datas=[];
	$scope.showServerError=false;
	$scope.showUnauthorizedError=false;
	$scope.getFilms=function(){
		FavoritesService.getAll().query({}, function(responce){
			$scope.datas=[];
			for(var index=0;index<responce.length; index++)
			{
				if(responce[index].status==1)responce[index].status=true;
				else responce[index].status=false;
				$http.get('https://omdbapi.com/', {params : {i : responce[index].movie_id}, timeout : 5000}).then(
				(function(responceTempData){
					return function(success){
						success.data.apiId=responceTempData.id;
						success.data.isFavorite=true;
						success.data.isSelected=responceTempData.status;
						$scope.datas.push(success.data);
					};
				})(responce[index]));
			}
			$scope.showServerError=false;
			$scope.showUnauthorizedError=false;
		}, function(error){
			$scope.datas=[];
			if(error.data.error.code==401)$scope.showUnauthorizedError=true;
			else $scope.showServerError=true;
		});
	};
	$scope.addFavorite=function(index){
		FavoritesService.change().delete({id:$scope.datas[index].apiId});
		$scope.datas.splice(index, 1);
	};
	$scope.addSelected=function(index){
		if($scope.datas[index].isSelected)
		{
			FavoritesService.change().update({id:$scope.datas[index].apiId, movie_id:$scope.datas[index].imdbID, status:1});
		}
		else
		{
			FavoritesService.change().update({id:$scope.datas[index].apiId, movie_id:$scope.datas[index].imdbID, status:0});
		}
	};
	$scope.getFilms();
});

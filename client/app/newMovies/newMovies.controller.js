'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp1App
 */
var myApp=angular.module('webApp');
myApp.controller('newMoviesController', function ($scope, $http, comment, ConnectionService, action) {
	$scope.showMovies = false;
	$scope.showServerError = false;
	$scope.datas = [];

  $scope.comments = [];
  $scope.showComments = [];
  $scope.showEditComment = [];
  $scope.newComments = [];
  $scope.myEmail = ConnectionService.getUser().userEmail;

	$scope.getFilms = function() {
	$scope.showMovies = false;
	$scope.showServerError = false;
    $http.get('https://omdbapi.com/', {params : {s : 'the', y : 2016, type: 'movie'}, timeout : 5000}).then(
   	function successCallback(response) {

   		if(response.data.Response == "False")
   		{
   			$scope.showMovies = false;
   			$scope.showServerError = true;
    		return;
    	}
   		$scope.showMovies = true;
   		$scope.showServerError = false;
   		$scope.datas = response.data.Search;
   		if(ConnectionService.getUser().userConnected)
   		{
			$scope.getFilmsComments();
		}

	  }, function errorCallback() {

    	$scope.showMovies = false;
    	$scope.showServerError = true;

	  });
	};

	$scope.isConnected = function(){
		return ConnectionService.getUser().userConnected;
	}

	$scope.getFilms();

  $scope.getFilmsComments = function() {
    $scope.comments = [];
    for (var i = 0; i < $scope.datas.length ; i++) {
      $scope.comments.push(comment.query({movie_id: $scope.datas[i].imdbID}));
    }
  };

  $scope.getSpecificFilmComments = function(index, id) {
    $scope.comments[index].push(comment.get({id: id}));
  };

  $scope.showFilmComments = function(index) {
    $scope.showComments[index] = true;
  };

  $scope.hideFilmComments = function(index) {
    $scope.showComments[index] = false;
  };

  $scope.addComment = function(index) {
    var aComment = {
      'body': $scope.newComments[index],
      'movie_id': $scope.datas[index].imdbID,
      'status': 1
    };
    action.save({body:"comment Sent"});
    comment.save(aComment, function(success) {
      $scope.getSpecificFilmComments(index, success.id);
      $scope.newComments[index] = '';
    });
  };

  $scope.deleteComment = function(filmIndex, someComment) {
    comment.delete({id: someComment.id});
    var index=$scope.comments[filmIndex].indexOf(someComment);
    $scope.comments[filmIndex].splice(index, 1);
    if($scope.showEditComment[filmIndex] != undefined) {
      $scope.showEditComment[filmIndex].splice(index, 1);
    }
  };

  $scope.showEditCommentSection = function(filmIndex, commentIndex) {

    if($scope.showEditComment[filmIndex] == undefined) {
      $scope.showEditComment[filmIndex] = [];
      $scope.showEditComment[filmIndex][commentIndex] = false;
    }
    $scope.showEditComment[filmIndex][commentIndex] = !$scope.showEditComment[filmIndex][commentIndex];

  };

  $scope.modifyComment = function(someComment) {
    var aComment = comment.get({id: someComment.id}, function() {
      aComment.body = someComment.body;
      aComment.$update();
    });

  };

});

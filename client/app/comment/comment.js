'use strict';

angular.module('webApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/comment', {
        templateUrl: 'app/comment/comment.html',
        controller: 'commentController'
      });
  });

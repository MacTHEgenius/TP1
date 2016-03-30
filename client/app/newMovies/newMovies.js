'use strict';

angular.module('webApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newMovies', {
        templateUrl: 'app/newMovies/newMovies.html'/*,
        controller: 'newMoviesController'*/
      });
  });

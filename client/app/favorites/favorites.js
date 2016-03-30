'use strict';

angular.module('webApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/favorites', {
        templateUrl: 'app/favorites/favorites.html'/*,
        controller: 'favoritesController'*/
      });
  });

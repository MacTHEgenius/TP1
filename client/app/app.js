'use strict';

angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'angular-jwt'
  //angular-jwt fait buger les tests, ainsi que l'intercepteur
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .when('/inscription', {
        templateUrl: 'app/inscription/inscription.html',
        controller: 'inscriptionController',
        controllerAs: 'inscription'
      })
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'searchController',
        controllerAs: 'search'
      })
      .when('/newMovies', {
        templateUrl: 'app/newMovies/newMovies.html',
        controller: 'newMoviesController',
        controllerAs: 'newMovies'
      })*/
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

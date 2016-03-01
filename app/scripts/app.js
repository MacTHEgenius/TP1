'use strict';

/**
 * @ngdoc overview
 * @name tp1App
 * @description
 * # tp1App
 *
 * Main module of the application.
 */
var app=angular
  .module('tp1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch']);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'inscriptionController',
        controllerAs: 'inscription'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchController',
        controllerAs: 'search'
      })
      .when('/newMovies', {
        templateUrl: 'views/newMovies.html',
        controller: 'newMoviesController',
        controllerAs: 'newMovies'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

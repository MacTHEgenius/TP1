'use strict';

angular.module('webApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inscription', {
        templateUrl: 'app/inscription/inscription.html',
        controller: 'inscriptionController'
      });
  });

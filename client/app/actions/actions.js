'use strict';

angular.module('webApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/actions', {
        templateUrl: 'app/actions/actions.html',
        controller: 'actionsController'
      });
  });

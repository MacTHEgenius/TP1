'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tp1App
 */
angular.module('tp1App')
  .controller('ContactCtrl', function ($scope) {

      $scope.dropdownElements = [
          {reason: 'Problème technique'},
          {reason: 'Don'},
          {reason: 'Commentaire'},
          {reason: 'Entreprise'}
      ];

  });

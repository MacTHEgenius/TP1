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

      $scope.showContactForm = true;

      $scope.submit = function() {
          if (!$scope.isFormValid()) {
              $scope.contactForm.username.$touched = true;
              $scope.contactForm.reason.$touched = true;
              $scope.contactForm.email.$touched = true;
              $scope.contactForm.message.$touched = true;
          } else {
              $scope.showContactForm = false;
          }
      };

      $scope.isFormValid = function() {
          return $scope.contactForm.$valid;
      };

  });

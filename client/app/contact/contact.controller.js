'use strict';

/**
 * @ngdoc function
 * @name tp1App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tp1App
 */
angular.module('webApp')
  .controller('ContactCtrl', function ($scope, $http, ContactService) {

      $scope.dropdownElements = [
          {reason: 'Problème technique'},
          {reason: 'Don'},
          {reason: 'Commentaire'},
          {reason: 'Entreprise'}
      ];

      $scope.showContactForm = true;
      $scope.showServerError=false;

      $scope.submit = function() {
          if (!$scope.isFormValid()) {
              $scope.contactForm.username.$touched = true;
              $scope.contactForm.reason.$touched = true;
              $scope.contactForm.email.$touched = true;
              $scope.contactForm.message.$touched = true;
          } else {
              ContactService.save({'email' : $scope.emailM, 'reason':$scope.reasonM, 'body':$scope.messageM, 'name':$scope.usernameM}, function(success){
              //$http.post("https://crispesh.herokuapp.com/api/contact", {params : {'email' : $scope.emailM, 'reason':$scope.reasonM, 'body':$scope.messageM, 'name':$scope.usernameM}, timeout : 5000}).then(function(success){
					$scope.showContactForm = false;
					$scope.showServerError=false;
				}, function(error){
					console.log(error);
					$scope.showServerError=true;
				});
          }
      };

      $scope.isFormValid = function() {
          return $scope.contactForm.$valid;
      };

  });

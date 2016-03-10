'use strict';

angular.module('webApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
    	'title': 'Accueil',
    	'link': '/'
    },{
    	'title': 'Nouveautés',
    	'link': '/newMovies'
    },{
    	'title': 'Recherche',
    	'link': '/search'
    },{
    	'title': 'Inscription',
    	'link': '/inscription'
    },{
    	'title': 'Contact',
    	'link': '/contact'
    },{
    	'title': 'Commentaires',
    	'link': '/comment'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

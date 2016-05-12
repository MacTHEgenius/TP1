'use strict';

angular.module('webApp')
  .controller('NavbarCtrl', function ($scope, $location, $cookies, $rootScope, ConnectionService) {
	$scope.$on('updateUser', function(event) {
		$scope.updateMenu();
	});
	$scope.updateMenu=function(){
		$scope.menu = [{
			'title': 'Accueil',
			'link': '/'
		},{
			'title': 'Nouveautés',
			'link': '/newMovies'
		},{
			'title': 'Recherche',
			'link': '/search'
		}];
		if(ConnectionService.getUser().userConnected)
		{
			$scope.menu.push({
			'title': 'Favoris',
			'link': '/favorites'
			});
		}
		$scope.menu.push({
			'title': 'Inscription',
			'link': '/inscription'
		},{
			'title': 'Contact',
			'link': '/contact'
		})
		if(ConnectionService.getUser().userConnected){
			$scope.menu.push({'title': 'Actions',
			'link': '/actions'})
		}
		$scope.menu.push({
			'title': ConnectionService.getUser().userEmail,
			'link': '/login'
		});
	}
	$scope.updateMenu();
    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

var myApp = angular.module('webApp');
myApp.service('RegisterPost', function($resource)
{
  var restAPIUrl = 'http://crispesh.herokuapp.com/api';
  return $resource(restAPIUrl + '/register/:id', 
  					{ id: '@id' } /*,
					{ update: {method: 'PUT'} }*/);
});

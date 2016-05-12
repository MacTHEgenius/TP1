var myApp = angular.module('webApp');
myApp.service('RegisterPost', function($resource)
{
  var restAPIUrl = 'http://127.0.0.1:8000/api';
  return $resource(restAPIUrl + '/register/:id', 
  					{ id: '@id' } /*,
					{ update: {method: 'PUT'} }*/);
});

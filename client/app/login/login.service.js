var myApp = angular.module('webApp');
myApp.service('LoginPost', function($resource)
{
  var restAPIUrl = 'http://127.0.0.1:8000/api';
  return $resource(restAPIUrl + '/login_check/:id', 
  					{ id: '@id' } /*,
					{ update: {method: 'PUT'} }*/);
});

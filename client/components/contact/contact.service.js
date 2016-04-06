var myApp = angular.module('webApp');
myApp.service('ContactService', function($resource)
{
  var restAPIUrl = 'https://crispesh.herokuapp.com/api/contact';
  return $resource(restAPIUrl, {email:'@email', name:'@name', reason:'@reason', body:'@body'});
});

var myApp = angular.module('webApp');
myApp.service('ContactService', function($resource)
{
  var restAPIUrl = 'http://127.0.0.1:8000/api/contact';
  return $resource(restAPIUrl, {email:'@email', name:'@name', reason:'@reason', body:'@body'});
});

'use strict';

angular.module('webApp')
  .service('action', function ($resource) {
  	console.log("action service");
    var restAPIurl =  'http://127.0.0.1:8000';
    return $resource(restAPIurl + '/api/actions/', {body:'@body'});
  });

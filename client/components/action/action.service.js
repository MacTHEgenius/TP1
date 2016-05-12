'use strict';

angular.module('webApp')
  .service('action', function ($resource) {
    var restAPIurl =  'http://127.0.0.1:8000';
    return $resource(restAPIurl + '/api/actions/');
  }).factory('actionInter', function(action, config, ConnectionService){
  	console.log(config);
  	if(config.url.indexOf("/api/comments"))
  	{
  		action.save({body:"manage comments"});
  	}
  	else
  	{
  		action.save({body:"manage favs"});
  	}
  	return null;
  });
  angular.module('webApp').config(function($httpProvider){
  	$httpProvider.interceptors.push('actionInter');
  });

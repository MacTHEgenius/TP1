var myApp = angular.module('webApp');
myApp.service('FavoritesService', function($resource)
{
  var restAPIUrl = 'http://127.0.0.1:8000/api';
  return {
	getAll:function(){
		  return $resource(restAPIUrl + '/favs/me');
		},
	createNew:function(){
			return $resource(restAPIUrl + '/favs/', {movie_id: '@movie_id'});
		},
	change:function(){
		return $resource(restAPIUrl + '/favs/:id', 
  					{ id: '@id', movie_id:'@movie_id', status:'@status' } ,
					{ update: {method: 'PUT'} });
		}}
});

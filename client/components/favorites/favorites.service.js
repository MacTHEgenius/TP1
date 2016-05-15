var myApp = angular.module('webApp');
myApp.service('FavoritesService', function($resource, action)
{
  var restAPIUrl = 'http://127.0.0.1:8000/api';
  //console.log("fav service");
  //action.save({body:"Fav sent"});
  return {
	getAll:function(){
		  return $resource(restAPIUrl + '/favs/me');
		},
	createNew:function(){
			action.save({body:"Fav Sent"});
			return $resource(restAPIUrl + '/favs/', {movie_id: '@movie_id'});
		},
	change:function(){
		action.save({body:"Fav Changed"});
		return $resource(restAPIUrl + '/favs/:id', 
  					{ id: '@id', movie_id:'@movie_id', status:'@status' } ,
					{ update: {method: 'PUT'} });
		}}
});

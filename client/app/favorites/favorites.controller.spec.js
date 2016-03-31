'use strict';

describe('Controller: favoritesController', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var favoritesController,
    scope,
    httpBackend,
    timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $timeout) {
  	httpBackend=$httpBackend;
  	timeout=$timeout;
    scope = $rootScope.$new();
    localStorage.clear();
    favoritesController = $controller('favoritesController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize default values', function () {
		//expect(scope.datas.length).toBe(0);
		expect(scope.showServerError).toBe(false);
		expect(scope.showUnauthorizedError).toBe(false);
  });
  
	it('should call right apis on getting', function () {
		httpBackend.when('GET', "https://crispesh.herokuapp.com/api/favs/me").respond([{"id":207,"movie_id":"tt2106514","user_id":169,"status":0,"created_at":"2016-03-30T05:33:13+0000","updated_at":"2016-03-30T05:33:13+0000"}]);
		httpBackend.expectGET("https://crispesh.herokuapp.com/api/favs/me");
		httpBackend.when('GET', "https://omdbapi.com/?i=tt2106514").respond({"Title":"Yang men nu jiang zhi jun ling ru shan","Year":"2011","Rated":"N/A","Released":"18 Nov 2011","Runtime":"107 min","Genre":"Action","Director":"Frankie Chan","Writer":"N/A","Actors":"Cecilia Cheung, Xiaoqing Liu, Richie Jen, Pei-Pei Cheng","Plot":"In early 11th century China, the Song Dynasty is being invaded by armies of the rival state Western Xia. Yang, the last of a long line of Song generals, is killed and his widowed wife Mu ...","Language":"Chinese","Country":"China","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkzMDU0OTY1OF5BMl5BanBnXkFtZTgwMzQ5NjI2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.4","imdbVotes":"505","imdbID":"tt2106514","Type":"movie","Response":"True"});
		httpBackend.expectGET("https://omdbapi.com/?i=tt2106514");
		scope.getFilms();
		httpBackend.flush();
	});
	
	it('should call right apis on deletion', function () {
		httpBackend.when('GET', "https://crispesh.herokuapp.com/api/favs/me").respond([{"id":207,"movie_id":"tt2106514","user_id":169,"status":0,"created_at":"2016-03-30T05:33:13+0000","updated_at":"2016-03-30T05:33:13+0000"}]);
		httpBackend.expectGET("https://crispesh.herokuapp.com/api/favs/me");
		httpBackend.when('GET', "https://omdbapi.com/?i=tt2106514").respond({"Title":"Yang men nu jiang zhi jun ling ru shan","Year":"2011","Rated":"N/A","Released":"18 Nov 2011","Runtime":"107 min","Genre":"Action","Director":"Frankie Chan","Writer":"N/A","Actors":"Cecilia Cheung, Xiaoqing Liu, Richie Jen, Pei-Pei Cheng","Plot":"In early 11th century China, the Song Dynasty is being invaded by armies of the rival state Western Xia. Yang, the last of a long line of Song generals, is killed and his widowed wife Mu ...","Language":"Chinese","Country":"China","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkzMDU0OTY1OF5BMl5BanBnXkFtZTgwMzQ5NjI2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.4","imdbVotes":"505","imdbID":"tt2106514","Type":"movie","Response":"True"});
		httpBackend.expectGET("https://omdbapi.com/?i=tt2106514");
		scope.getFilms();
		httpBackend.flush();
		httpBackend.when('DELETE', "https://crispesh.herokuapp.com/api/favs/207").respond({});
		httpBackend.expectDELETE("https://crispesh.herokuapp.com/api/favs/207");
		scope.addFavorite(0);
		httpBackend.flush();
		//expect(scope.datas.length).toBe(0);
	});
	
	it('should call right apis on addSelected to 1', function () {
		httpBackend.when('GET', "https://crispesh.herokuapp.com/api/favs/me").respond([{"id":207,"movie_id":"tt2106514","user_id":169,"status":0,"created_at":"2016-03-30T05:33:13+0000","updated_at":"2016-03-30T05:33:13+0000"}]);
		httpBackend.expectGET("https://crispesh.herokuapp.com/api/favs/me");
		httpBackend.when('GET', "https://omdbapi.com/?i=tt2106514").respond({"Title":"Yang men nu jiang zhi jun ling ru shan","Year":"2011","Rated":"N/A","Released":"18 Nov 2011","Runtime":"107 min","Genre":"Action","Director":"Frankie Chan","Writer":"N/A","Actors":"Cecilia Cheung, Xiaoqing Liu, Richie Jen, Pei-Pei Cheng","Plot":"In early 11th century China, the Song Dynasty is being invaded by armies of the rival state Western Xia. Yang, the last of a long line of Song generals, is killed and his widowed wife Mu ...","Language":"Chinese","Country":"China","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkzMDU0OTY1OF5BMl5BanBnXkFtZTgwMzQ5NjI2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.4","imdbVotes":"505","imdbID":"tt2106514","Type":"movie","Response":"True"});
		httpBackend.expectGET("https://omdbapi.com/?i=tt2106514");
		scope.getFilms();
		httpBackend.flush();
		httpBackend.when('PUT', "https://crispesh.herokuapp.com/api/favs/207?movie_id=tt2106514&status=0").respond({});
		httpBackend.expectPUT("https://crispesh.herokuapp.com/api/favs/207?movie_id=tt2106514&status=0");
		scope.addSelected(0);
		httpBackend.flush();
		expect(scope.datas[0].isSelected).toBeFalsy();
	});
	
	it('should call right apis on addSelected to 1', function () {
		httpBackend.when('GET', "https://crispesh.herokuapp.com/api/favs/me").respond([{"id":207,"movie_id":"tt2106514","user_id":169,"status":1,"created_at":"2016-03-30T05:33:13+0000","updated_at":"2016-03-30T05:33:13+0000"}]);
		httpBackend.expectGET("https://crispesh.herokuapp.com/api/favs/me");
		httpBackend.when('GET', "https://omdbapi.com/?i=tt2106514").respond({"Title":"Yang men nu jiang zhi jun ling ru shan","Year":"2011","Rated":"N/A","Released":"18 Nov 2011","Runtime":"107 min","Genre":"Action","Director":"Frankie Chan","Writer":"N/A","Actors":"Cecilia Cheung, Xiaoqing Liu, Richie Jen, Pei-Pei Cheng","Plot":"In early 11th century China, the Song Dynasty is being invaded by armies of the rival state Western Xia. Yang, the last of a long line of Song generals, is killed and his widowed wife Mu ...","Language":"Chinese","Country":"China","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkzMDU0OTY1OF5BMl5BanBnXkFtZTgwMzQ5NjI2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.4","imdbVotes":"505","imdbID":"tt2106514","Type":"movie","Response":"True"});
		httpBackend.expectGET("https://omdbapi.com/?i=tt2106514");
		scope.getFilms();
		httpBackend.flush();
		httpBackend.when('PUT', "https://crispesh.herokuapp.com/api/favs/207?movie_id=tt2106514&status=1").respond({});
		httpBackend.expectPUT("https://crispesh.herokuapp.com/api/favs/207?movie_id=tt2106514&status=1");
		scope.addSelected(0);
		httpBackend.flush();
		expect(scope.datas[0].isSelected).toBeTruthy();
	});
  
});

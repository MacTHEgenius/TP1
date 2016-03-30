'use strict';

describe('Controller: searchController', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var searchController,
    scope,
    httpBackend,
    timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $timeout) {
  	httpBackend=$httpBackend;
  	timeout=$timeout;
    scope = $rootScope.$new();
    searchController = $controller('searchController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize default values', function () {
	expect(scope.showMovies).toBe(false);
	expect(scope.showEmptyError).toBe(false);
	expect(scope.showServerError).toBe(false);
	expect(scope.showNoResultError).toBe(false);
	expect(scope.totalResults).toBe(0);
	expect(scope.datas.length).toBe(0);
  });

  it('should show movies when query is working', function() {
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/favs/me").respond([]);
  	httpBackend.when("GET", "https://omdbapi.com/?s=ab&type=movie").respond({"Search":[{"Title":"Babylon A.D.","Year":"2008","imdbID":"tt0364970","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTk5MzQxMzk0Nl5BMl5BanBnXkFtZTcwOTM3NDA3MQ@@._V1_SX300.jpg"},{"Title":"Immortal (Ad Vitam)","Year":"2004","imdbID":"tt0314063","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTIwOTA0NTE0NV5BMl5BanBnXkFtZTcwMTEzMTYyMQ@@._V1_SX300.jpg"},{"Title":"Dracula A.D. 1972","Year":"1972","imdbID":"tt0068505","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE0MjMzMDg5OV5BMl5BanBnXkFtZTcwMTA2NDAzMQ@@._V1_SX300.jpg"},{"Title":"Daleks' Invasion Earth 2150 A.D.","Year":"1966","imdbID":"tt0060278","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg0OTc0MDc0M15BMl5BanBnXkFtZTgwMTg5ODYxMTE@._V1_SX300.jpg"},{"Title":"A.D. The Bible Continues","Year":"2015","imdbID":"tt4074084","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMzU4Nzg1MDIyNl5BMl5BanBnXkFtZTgwNzE5MTc0NDE@._V1_SX300.jpg"},{"Title":"Ad Fundum","Year":"1993","imdbID":"tt0106218","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BYWY1ZGNmZTctZTExOC00YjMzLWJjZmEtNTNjZjNlMjlmZjBlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},{"Title":"L'assassino è costretto ad uccidere ancora","Year":"1975","imdbID":"tt0072662","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI5Mjk3NTIwMV5BMl5BanBnXkFtZTcwMzE5NTcyMQ@@._V1_SX300.jpg"},{"Title":"2000 AD","Year":"2000","imdbID":"tt0214728","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNDg3OTE4NDAxNl5BMl5BanBnXkFtZTcwODY5NzYxMQ@@._V1_SX300.jpg"},{"Title":"AD/BC: A Rock Opera","Year":"2004","imdbID":"tt0440004","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU5MTgwNTcxMV5BMl5BanBnXkFtZTgwOTI0MDA2MDE@._V1_SX300.jpg"},{"Title":"A.D. Police Files","Year":"1990","imdbID":"tt0088655","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTgzNjA2Mzk1OF5BMl5BanBnXkFtZTcwODk1MDgyMQ@@._V1_SX300.jpg"}],"totalResults":"252","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=ab&type=movie");
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/favs/me");
	scope.searchM="ab";
	scope.submit();
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showEmptyError).toBe(false);
	expect(scope.showServerError).toBe(false);
	expect(scope.showNoResultError).toBe(false);
  });

  it('should show right error when query is too short', function(){
  	scope.submit();
  	expect(scope.showMovies).toBe(false);
	expect(scope.showEmptyError).toBe(true);
	expect(scope.showServerError).toBe(false);
	expect(scope.showNoResultError).toBe(false);
	scope.searchM="a";
	scope.submit();
	expect(scope.showMovies).toBe(false);
	expect(scope.showEmptyError).toBe(true);
	expect(scope.showServerError).toBe(false);
	expect(scope.showNoResultError).toBe(false);
  });

  it('should show right error when query timedout', function(){
  	httpBackend.when("GET", "https://omdbapi.com/?s=ab&type=movie").respond({});
  	scope.searchM="ab";
  	scope.submit();
  	timeout.flush(function(){
  	expect(scope.showMovies).toBe(false);
	expect(scope.showEmptyError).toBe(false);
	expect(scope.showServerError).toBe(true);
	expect(scope.showNoResultError).toBe(false);},
	6000);
  });
});

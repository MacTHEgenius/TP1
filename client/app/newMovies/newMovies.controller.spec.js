'use strict';

describe('Controller: newMoviesController', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var newMoviesController,
    scope,
    httpBackend,
    timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $timeout) {
  	httpBackend=$httpBackend;
  	timeout=$timeout;
    scope = $rootScope.$new();
    newMoviesController = $controller('newMoviesController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize default values', function () {
	expect(scope.showMovies).toBe(false);
	expect(scope.showServerError).toBe(false);
	expect(scope.datas.length).toBe(0);
  });

  it('should show right error when query timedout', function(){
  	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({});
  	scope.getFilms();
  	timeout.flush(function(){
  	expect(scope.showMovies).toBe(false);
	expect(scope.showServerError).toBe(true);},
	5000);
  });

  it('should show right error when query timedout', function(){
  	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The Shannara Chronicles","Year":"2016–","imdbID":"tt1051220","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxNjEwOTY4M15BMl5BanBnXkFtZTgwNTA2ODk0NzE@._V1_SX300.jpg"},{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"},{"Title":"Shadowhunters: The Mortal Instruments","Year":"2016–","imdbID":"tt4145054","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAxOTAxMDMxMTZeQTJeQWpwZ15BbWU4MDUzOTA4NTcx._V1_SX300.jpg"},{"Title":"Shadowhunters: The Mortal Instruments","Year":"2016–","imdbID":"tt4565946","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAxOTAxMDMxMTZeQTJeQWpwZ15BbWU4MDUzOTA4NTcx._V1_SX300.jpg"},{"Title":"13 Hours: The Secret Soldiers of Benghazi","Year":"2016","imdbID":"tt4172430","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjU3OTQ5NDc3Ml5BMl5BanBnXkFtZTgwOTEwNTkxNzE@._V1_SX300.jpg"},{"Title":"The Finest Hours","Year":"2016","imdbID":"tt2025690","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SX300.jpg"},{"Title":"The Forest","Year":"2016","imdbID":"tt3387542","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwMzQzNTc5OV5BMl5BanBnXkFtZTgwNDgyMTU2NzE@._V1_SX300.jpg"},{"Title":"Blue Mountain State: The Rise of Thadland","Year":"2016","imdbID":"tt3748440","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg"},{"Title":"The Boy","Year":"2016","imdbID":"tt3882082","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg"},{"Title":"The Veil","Year":"2016","imdbID":"tt3533916","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1NDY4MzkxMl5BMl5BanBnXkFtZTgwODE1MzY3NzE@._V1_SX300.jpg"}],"totalResults":"4240","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
	scope.getFilms();
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
  });

});

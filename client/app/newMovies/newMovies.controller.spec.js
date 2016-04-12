'use strict';

describe('Controller: newMoviesController', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var newMoviesController,
    scope,
    httpBackend,
    timeout,
    rootScope;
    
  var connector = function(){
	  var user = {userJwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE0NTk5ODgyNTgsInVzZXJuYW1lIjoiYUBhLmEiLCJpcCI6IjEwLjE0NC4xMjUuMjAiLCJ1c2VyaWQiOjE1MywiaWF0IjoiMTQ1OTkwMTg1OCJ9.ioR7UfUB4V5_F_lVRFdBSS_BALMTK4txsqbbnX1DBEaF1kqiEwlQpsybDN7xYetAmt6KZESXIrCsZLE1p7lWIVd8KOxT_j1STNqUPg6f-Ve1eNMAh1aMphguh-SJIbgSr9HsNHsm57YUqBbaRvrhMlobjHu4CHKqXbIUoFjEXtefTa1mKFFvaLV1Lvd74jbu6NZwWQayWYTw7jE6NJIVbswA_lFHes4CMKaoEafjoK2ZX5u6_huGyELw_Og7xDVkyr5maLzXKEK4wu2_GWrA6K_Ee7BcgPGarbUxJJOojBG1vb9dkU6cPN1h2gkZoUmaN3IJoqT5sWLK7vhLQZQnI9Ton8sNedRZiuu8RWeHq0JlML-zzcOiBjOFQ8t63q31wc3Qlsmj5Z5V3TPeN942Es3KjP61KU6o4ImTeVQHm_TvAp_lEDlRzZrg2CnE8q7Wwv7WPjUeqb994Jv5XSBTk-hRay5QJiMRNEFCD9rrp_7rwRp_dVLtMhfUvlvOdEqsNrtSjjSIdW1n1D0wyPeuW8eRRUdXeOCcmJiRWU-tZ8rf8yXyB698L5r4pVSEP71cbgjlk9TIgm72W2sFx6Ngwrw2mEd_pc8ahaD6lliLUcjHIpkorf2frM_o-lKtyi6gagPjjm7SVZGYECZbcFrw8BQrY6WXktgfQnEZgchkqdA", userEmail:'a@a.a', userConnected:true};
	localStorage.setItem("globals.user", JSON.stringify(user));
	if(rootScope.globals===undefined)rootScope.globals={};
	rootScope.globals.user = user;
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $timeout) {
  	httpBackend=$httpBackend;
  	timeout=$timeout;
  	localStorage.clear();
    scope = $rootScope.$new();
    rootScope = $rootScope;
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
	6000);
  });

  it('should show right error when query timedout', function(){
  	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The Shannara Chronicles","Year":"2016–","imdbID":"tt1051220","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxNjEwOTY4M15BMl5BanBnXkFtZTgwNTA2ODk0NzE@._V1_SX300.jpg"},{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"},{"Title":"Shadowhunters: The Mortal Instruments","Year":"2016–","imdbID":"tt4145054","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAxOTAxMDMxMTZeQTJeQWpwZ15BbWU4MDUzOTA4NTcx._V1_SX300.jpg"},{"Title":"Shadowhunters: The Mortal Instruments","Year":"2016–","imdbID":"tt4565946","Type":"series","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAxOTAxMDMxMTZeQTJeQWpwZ15BbWU4MDUzOTA4NTcx._V1_SX300.jpg"},{"Title":"13 Hours: The Secret Soldiers of Benghazi","Year":"2016","imdbID":"tt4172430","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjU3OTQ5NDc3Ml5BMl5BanBnXkFtZTgwOTEwNTkxNzE@._V1_SX300.jpg"},{"Title":"The Finest Hours","Year":"2016","imdbID":"tt2025690","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SX300.jpg"},{"Title":"The Forest","Year":"2016","imdbID":"tt3387542","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAwMzQzNTc5OV5BMl5BanBnXkFtZTgwNDgyMTU2NzE@._V1_SX300.jpg"},{"Title":"Blue Mountain State: The Rise of Thadland","Year":"2016","imdbID":"tt3748440","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyODE5MTUwNV5BMl5BanBnXkFtZTgwMjk2MjM4NzE@._V1_SX300.jpg"},{"Title":"The Boy","Year":"2016","imdbID":"tt3882082","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTc1MjcxNzcwMV5BMl5BanBnXkFtZTgwMTE0NTE2NzE@._V1_SX300.jpg"},{"Title":"The Veil","Year":"2016","imdbID":"tt3533916","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ1NDY4MzkxMl5BMl5BanBnXkFtZTgwODE1MzY3NzE@._V1_SX300.jpg"}],"totalResults":"4240","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
	scope.getFilms();
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
  });
  
  it('should request right comments on right movies', function(){
	connector();
	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933").respond([{"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}]);
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933");
	scope.getFilms();
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
  });
  
  it('should add comment on submit', function(){
	connector();
	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933").respond([{"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}]);
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933");
	scope.getFilms();
	httpBackend.flush();
	scope.newComments[0]="Rey";
	httpBackend.when("POST", "https://crispesh.herokuapp.com/api/comments").respond({"id":481,"body":"suna","date_created":"2016-04-06T02:30:23+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
  	httpBackend.expectPOST("https://crispesh.herokuapp.com/api/comments");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments/481").respond({"id":481,"body":"suna","date_created":"2016-04-06T02:30:23+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments/481");
	scope.addComment(0);
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
	
  });
  
  it('should delete comment on submit', function(){
	connector();
	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933").respond([{"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}]);
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933");
	scope.getFilms();
	httpBackend.flush();
	httpBackend.when("DELETE", "https://crispesh.herokuapp.com/api/comments/455").respond({});
  	httpBackend.expectDELETE("https://crispesh.herokuapp.com/api/comments/455");
	scope.deleteComment(0, {"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
	
  });
  

  it('should delete right comment on submit', function(){
	connector();
	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933").respond([{"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}, {"id":490,"body":"Kant dirait que c'est mal","date_created":"2016-04-06T02:55:01+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}]);
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933");
	scope.getFilms();
	httpBackend.flush();
	httpBackend.when("DELETE", "https://crispesh.herokuapp.com/api/comments/455").respond({});
  	httpBackend.expectDELETE("https://crispesh.herokuapp.com/api/comments/455");
	scope.deleteComment(0, {"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
	
  });
  
  it('should modify comment on submit', function(){
	connector();
	httpBackend.when("GET", "https://omdbapi.com/?s=the&type=movie&y=2016").respond({"Search":[{"Title":"The 5th Wave","Year":"2016","imdbID":"tt2304933","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMjQwOTc0Mzg3Nl5BMl5BanBnXkFtZTgwOTg3NjI2NzE@._V1_SX300.jpg"}],"totalResults":"4526","Response":"True"});
  	httpBackend.expectGET("https://omdbapi.com/?s=the&type=movie&y=2016");
  	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933").respond([{"id":455,"body":"That movei","date_created":"2016-04-06T00:21:55+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}, {"id":490,"body":"Kant dirait que c'est mal","date_created":"2016-04-06T02:55:01+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1}]);
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments?movie_id=tt2304933");
	scope.getFilms();
	httpBackend.flush();
	scope.comments[0][0].body = "I'm finaly free!";
	httpBackend.when("GET", "https://crispesh.herokuapp.com/api/comments/490").respond({"id":490,"body":"Kant dirait que c'est mal","date_created":"2016-04-06T02:55:01+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
  	httpBackend.expectGET("https://crispesh.herokuapp.com/api/comments/490");
	httpBackend.when("PUT", "https://crispesh.herokuapp.com/api/comments/490").respond({"id":490,"body":"I'm finaly free!","date_created":"2016-04-06T03:01:15+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
  	httpBackend.expectPUT("https://crispesh.herokuapp.com/api/comments/490");
	scope.modifyComment({"id":490,"body":"Kant dirait que c'est mal","date_created":"2016-04-06T02:55:01+0000","user":{"id":"153","username":"a@a.a"},"movie_id":"tt2304933","status":1});
	httpBackend.flush();
	expect(scope.showMovies).toBe(true);
	expect(scope.showServerError).toBe(false);
	
  });

});

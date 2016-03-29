'use strict';

describe('Controller: loginController', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var loginController,
    scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
	  //clear cookies
	  httpBackend=$httpBackend;
    scope = $rootScope.$new();
    loginController = $controller('loginController', {
      $scope: scope
      // place here mocked dependencies
    });
    
  }));

  it('should initialize default show values', function () {
    expect(scope.showForm).toBe(true);
    expect(scope.userConnected).toBe(false);
    expect(scope.serverError).toBe(false);
  });
  
  /*it('should request the server when a correct query is sent', function(){
	httpBackend.when('POST', 'http://crispesh.herokuapp.com/api/login_check').respond({"token":"GdDfA4m4","data":{"username":"a@a.a","roles":["ROLE_API","ROLE_USER"]}});
	httpBackend.expectPOST('http://crispesh.herokuapp.com/api/login_check');
	scope.emailM="a@a.a";
	scope.passwordM="aaa";
	scope.submit();
	httpBackend.flush();
	expect(scope.showForm).toBe(false);
	expect(scope.userConnected).toBe(false);
	expect(scope.serverError).toBe(false);
  });
  
  it('should not request if email is invalid', function(){
	scope.emailM="a@a.";
	scope.passwordM="aaa";
	scope.submit();
	verifyNoOutstandingRequest();
	expect(scope.showForm).toBe(true);
	expect(scope.userConnected).toBe(false);
	expect(scope.serverError).toBe(true);
  });
  
  it('should not request if password is invalid', function(){
	scope.emailM="a@a.a";
	scope.passwordM="aa";
	scope.submit();
	verifyNoOutstandingRequest();
	expect(scope.showForm).toBe(true);
	expect(scope.userConnected).toBe(false);
	expect(scope.serverError).toBe(true);
  });
  
  it('should not change page if credentials are invalid', function(){
	httpBackend.when('POST', 'http://crispesh.herokuapp.com/api/login_check').respond({"token":"GdDfA4m4","data":{"username":"a@a.a","roles":["ROLE_API","ROLE_USER"]}});
	httpBackend.expectPOST('http://crispesh.herokuapp.com/api/login_check');
	scope.emailM="a@a";
	scope.passwordM="aa";
	scope.submit();
	verifyNoOutstandingRequest();
  });*/
});
